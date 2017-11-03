import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

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

export default Form;