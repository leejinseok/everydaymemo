import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';
import { Form, AuthError } from 'components/Signup';
import { isEmail, isLength, isAlphanumeric } from 'validator';

class FormContainer extends Component {

    setError = (message) => {
        const { AuthActions } = this.props;
        AuthActions.setError({
            form: 'register',
            message
        })
    }

    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;
        AuthActions.changeInput({
            form: 'register',
            name,
            value
        });

        const validation = this.validate[name](value);
        if (!validation) return;
    }

    validate = {
        email: (value) => {
            if (!isEmail(value)) {
                this.setError('잘못 된 이메일 형식입니다.');
                return false;
            }
            this.setError(null); // 이메일과 아이디는 에러 null 처리를 중복확인 부분에서 하게 됩니다
            return true;
        },
        password: (value) => {
            if(!isLength(value, { min: 6 })) {
                this.setError('비밀번호를 6자 이상 입력하세요.');
                return false;
            }
            this.setError(null); // 이메일과 아이디는 에러 null 처리를 중복확인 부분에서 하게 됩니다
            return true;
        },
        passwordConfirm: (value) => {
            if(this.props.form.get('password') !== value) {
                this.setError('비밀번호확인이 일치하지 않습니다.');
                return false;
            }
            this.setError(null); 
            return true;
        }
    }

    render() {
        const { handleChange } = this;
        const { form, error } = this.props;
        return(
            <Form>
                <input 
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={form.get('email')}
                    placeholder="이메일을 입력해주세요."
                    />
                <input 
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={form.get('password')}
                    placeholder="비밀번호를 입력해주세요."
                    />
                <input 
                    type="password"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={form.get('passwordConfirm')}
                    placeholder="비밀번호를 확인해주세요."
                    />
                {
                    error ? <AuthError>
                        {error}
                    </AuthError> : ''
                }
                <button>
                    회원으로 가입할게요.
                </button>
            </Form>
        )
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['register', 'form']),
        error: state.auth.getIn(['register', 'error']),
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(FormContainer);