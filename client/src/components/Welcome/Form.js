import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Form = styled.form`
    max-width: 360px;
    margin: 0 auto;
    height: auto;
    text-align: center;

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset;
    }

    input,
    button {
        margin-bottom: .5rem;
        padding: .7rem 1rem;
        border-radius: 0;
        transition: color, border .3s;
    }

    input {
        display: block;
        width: 100%;
        border: 1px solid ${oc.gray[3]};
        font-size: 14px;
        color: ${oc.gray[9]};

        &:hover,
        &:active,
        &:focus {
            outline: none;
        }

        &:focus {
            border: 1px solid ${oc.gray[5]};
        }

        &::-webkit-input-placeholder {
            color: ${oc.gray[6]};
        }
    }

    button {
        width: 100%;
        background: #fff;
        font-size: 14px;
        cursor: pointer;

        &.login {
            color: ${oc.lime[6]};
            border: 1px solid ${oc.lime[6]};
            &:hover {
                color: ${oc.lime[7]};
                border: 1px solid ${oc.lime[7]};
            }
            &:active {
                color: ${oc.lime[9]};
                border: 1px solid ${oc.lime[9]};
            }
        }

        &.signup {
            color: ${oc.gray[5]};
            border: 1px solid ${oc.gray[5]};
            &:hover {
                color: ${oc.gray[6]};
                border: 1px solid ${oc.gray[6]};
            }
            &:active {
                color: ${oc.gray[9]};
                border: 1px solid ${oc.gray[9]};
            }

        }

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

export default Form;