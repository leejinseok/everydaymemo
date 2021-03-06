import React from 'react';
import styled from 'styled-components';
import FormContainer from 'containers/Welcome/FormContainer';

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
`;

const Welcome = ({history}) => {
    return (
        <Wrapper>
            <FormContainer history={history}/>
        </Wrapper>
    )
};

export default Welcome;