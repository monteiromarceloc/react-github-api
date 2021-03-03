import React from 'react';
import styled from "styled-components";

export default ({ children, float, ...props }) => <StyledButton {...props}>{children}</StyledButton>

const StyledButton = styled.button`
    background: #1E88E5;
    color: #ddd;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    border: .5px solid #666;
    min-width: 160px;
    min-height: 36px;
    cursor: pointer;
    ${({ float }) => float ? `
        position: absolute;
        top: 10px;
        right: 10px;
    ` : ''}
`;