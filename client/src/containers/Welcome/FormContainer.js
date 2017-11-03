import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';
import styled from 'styled-components';
import oc from 'open-color';
import { toJS } from 'immutable';

const Form = styled.form`
    width: 100%;
    height: auto;
    text-align: center;

    input,
    button {
        margin-bottom: .5rem;
    }

    input {
        display: block;
        width: 100%;
        border: 1px solid ${oc.gray[3]};
        padding: .5rem .5rem;
        font-size: 14px;
        color: ${oc.gray[9]};
        &:hover,
        &:active,
        &:focus {
            outline: none;
        }

        &::-webkit-input-placeholder {
            color: ${oc.gray[6]};
        }
    }

    button {
        width: 100%;
        background: #fff;
        color: ${oc.gray[9]};
        border: 1px solid ${oc.gray[3]};
        border-radius: 3px;
        padding: .5rem 0;
        font-size: 14px;
        cursor: pointer;

        &:hover,
        &:active,
        &:focus {
            outline: none;
        }

        &::-webkit-input-placeholder {
            color: ${oc.gray[6]};
        }
    }
`;

class FormContainer extends Component {
    handleChange = (e) => {
        const { AuthActions } = this.props;
        AuthActions.changeInput({
            form: 'login',
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
                <button type="button">
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