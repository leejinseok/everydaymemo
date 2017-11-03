import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';
import { Form } from 'components/Signup'

class FormContainer extends Component {
    handleChange = (e) => {
        const { AuthActions } = this.props;
        AuthActions.changeInput({
            form: 'register',
            name: e.target.name,
            value: e.target.value
        });
    }

    render() {
        const { handleChange } = this;
        const { form } = this.props;
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
                <button>
                    회원으로 가입할게요.
                </button>
            </Form>
        )
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['register', 'form'])  
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(FormContainer);