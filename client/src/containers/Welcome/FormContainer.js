import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';
import * as userActions from 'redux/modules/user';
import { Form, AuthError } from 'components/Welcome';

class FormContainer extends Component {

    componentWillMount = async () => {
        const { UserActions, user } = this.props;
        try {
            await UserActions.checkLoginStatus();   
            console.log(user);
        } catch (e) {
            console.log(e);
        }
    }

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

    // 로그인 버튼 클릭
    handleLocalLogin = async () => {
        const { AuthActions, form, result, history } = this.props;
        const { email, password } = form.toJS();
        
        try {
            await AuthActions.localLogin({email, password});
            history.push('/home');
        } catch (error) {
            alert('잘못 된 계정정보입니다.');
        }
    }

    render() {
        const { handleChange, handleLocalLogin, goSignup } = this;
        const { form, error } = this.props;
        return(
            <Form>
                <input 
                    type="text" 
                    name="email" 
                    value={form.get('email')}
                    placeholder="이메일을 입력해주세요."
                    onChange={handleChange}
                    autoComplete="false" />
                <input 
                    type="password" 
                    name="password" 
                    value={form.get('password')}
                    placeholder="패스워드를 입력해 주세요."
                    onChange={handleChange}
                    autoComplete="false" />
                <button className="login" type="button" onClick={handleLocalLogin}>
                    로그인
                </button>
                <button className="signup" type="button" onClick={goSignup}>
                    회원가입
                </button>
                {
                    error ? <AuthError> {error} </AuthError> : ''
                }
            </Form>
        );
    };
};

export default connect(
    (state) => ({
        form: state.auth.getIn(['login', 'form']),
        error: state.auth.getIn(['login', 'error']),
        result: state.auth.get('result'),
        user: state.user.get('user')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(FormContainer);