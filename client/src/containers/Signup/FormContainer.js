import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';
import { Form } from 'components/Signup';
import {isEmail, isLength, isAlphanumeric} from 'validator';

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
    }

    validate = {
        email: (value) => {
            if (!isEmail(value)) {
                this.setError('잘못 된 이메일 형식입니다.');
                return false;
            }
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
                {error}
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