import React from 'react';
import styled from 'styled-components';
import FormContainer from 'containers/Welcome/FormContainer';

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
`;

const Welcome = () => {
    return (
        <Wrapper>
            <FormContainer />
        </Wrapper>
    )
};

export default Welcome;