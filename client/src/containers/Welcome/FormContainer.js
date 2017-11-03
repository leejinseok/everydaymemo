import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';
import { Form } from 'components/Welcome';

class FormContainer extends Component {

    // 이메일, 패스워드 변경 handle
    handleChange = (e) => {
        const { AuthActions } = this.props;
        AuthActions.changeInput({
            form: 'login',
            name: e.target.name,
            value: e.target.value
        });
    }

    // 회원가입으로 go!
    goSignup = () => {
        const { history } = this.props;
        history.push('/signup');
    }

    render() {
        const { handleChange, goSignup } = this;
        const { form } = this.props;
        return(
            <Form>
                <input 
                    type="text" 
                    name="email" 
                    value={form.get('email')}
                    placeholder="email"
                    onChange={handleChange}
                    autoComplete="false" />
                <input 
                    type="password" 
                    name="password" 
                    value={form.get('password')}
                    placeholder="패스워드"
                    onChange={handleChange}
                    autoComplete="false" />
                <button type="button">
                    로그인
                </button>
                <button type="button" onClick={goSignup}>
                    회원가입
                </button>
            </Form>
        );
    };
};

export default connect(
    (state) => ({
        form: state.auth.getIn(['login', 'form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(FormContainer);