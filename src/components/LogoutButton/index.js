import React from 'react';
import styled from "styled-components";
import { CgLogOut } from 'react-icons/cg';

export default (props) => {
    const { onClick } = props

    return (
        <StyledButton onClick={onClick}>
            <StyledIcon />
            Logout
        </StyledButton>
    )
}

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: #ddd;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em;
    position: absolute;
    top: 10px;
    left: 10px;
`;

const StyledIcon = styled(CgLogOut)`
    font-size: 24px;
    color: #eee;
    margin-right: 8px;
`