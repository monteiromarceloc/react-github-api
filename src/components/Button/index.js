import React, { useState } from 'react';
import styled from "styled-components";

export default (props) => {
    const { children, onClick, ...rest } = props
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        await onClick();
        setLoading(false);
    }

    return (
        <StyledButton onClick={handleClick} {...rest}>
            {
                loading ?
                    'Carregando...'
                    : children
            }
        </StyledButton>
    )
}

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