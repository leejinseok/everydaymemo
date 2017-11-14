import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    position: absolute;
    top: 62px;
    right: 1px;
    box-shadow: 0px 0px 1px 1px ${oc.gray[1]};
`;

const MenuWrapper = styled.div`
    background: white;
    min-width: 84px;
    padding: .5rem;
    text-align: center;
    font-size: 12px;
    color: ${oc.gray[4]};
    &:hover {
        cursor: pointer;
        background: ${oc.gray[0]};
    }
`;

const ProfileMenu = () => {
    return (
        <Wrapper>
            <MenuWrapper>
                로그아웃
            </MenuWrapper>
        </Wrapper>
    )
}

export default ProfileMenu;