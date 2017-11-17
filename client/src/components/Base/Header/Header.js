import React from 'react';
import styled from 'styled-components';
import { shadow, media } from 'lib/styleUtils';
import oc from 'open-color';
import Profile from './Profile';
import ProfileMenu from './ProfileMenu';

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

const Header = ({user, menu, handleProfileClick, handleLogout}) => {
    return(
        <Wrapper>
            Everyday Memo
            {
                user ? <Profile user={user} handleProfileClick={handleProfileClick}/> : ''
            }
            
            {
                menu ? <ProfileMenu handleLogout={handleLogout}/> : ''
            }
        </Wrapper>
    )
};

export default Header;