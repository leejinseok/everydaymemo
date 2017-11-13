import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 40px;
    height: 40px;
    background-image: url('/public/static/images/defeault_profile.png');
    background-position: center center;
    background-size: cover;
    border-radius: 50%;
    position: absolute;
    background: #fff;
    right: 10px;
    top: 10px;
`;

export const Profile = () => {
    return (
        <Wrapper />
    )
};

export default Profile;