import React, { useState } from 'react';
import styled from "styled-components";
import Loader from "react-loader-spinner";

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
                    <Loader
                        type="Oval"
                        color="#ddd"
                        height={20}
                        width={20}
                        timeout={5000}
                    />
                    : children
            }
        </StyledButton>
    )
}

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1E88E5;
    color: #ddd;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    border: .5px solid #666;
    width: 160px;
    height: 36px;
    ${({ float }) => float ? `
        position: absolute;
        top: 10px;
        right: 10px;
    ` : ''}
`;