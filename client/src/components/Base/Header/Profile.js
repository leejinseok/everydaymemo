import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 35px;
    height: 35px;
    background-image: url('/public/static/images/defeault_profile.png');
    background-position: center center;
    background-size: cover;
    border-radius: 50%;
    position: absolute;
    background: #fff;
    right: 26px;
    top: 14px;
    &:hover {
        cursor: pointer;
    }
`;

const Profile = ({handleProfileClick}) => {
    return (
        <Wrapper onClick={handleProfileClick}/>
    )
};

export default Profile;