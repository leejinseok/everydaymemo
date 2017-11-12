import React from 'react';
import styled from 'styled-components';
import { shadow, media } from 'lib/styleUtils';
import oc from 'open-color';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    background: ${oc.lime[6]};
    height: 60px;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    font-family: 'Lobster', cursive;
    ${shadow(1)};
`;

const Header = () => {
    return(
        <Wrapper>
            Everyday Memo
        </Wrapper>
    )
};

export default Header;