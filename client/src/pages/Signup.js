import React from 'react';
import FormContainer from 'containers/Signup/FormContainer';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
`;

const Signup = ({history}) => {
    return (
        <Wrapper>
            <FormContainer history={history}/>
        </Wrapper>
    )
};

export default Signup;