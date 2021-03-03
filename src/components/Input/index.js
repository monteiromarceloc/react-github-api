import React from 'react';
import styled from "styled-components";

export default ({ children, ...props }) => <StyledInput {...props}>{children}</StyledInput>

const StyledInput = styled.input`
font-size: 18px;
padding: 10px;
margin: 10px;
background: #30363d;
border: none;
border-radius: 3px;
::placeholder {
  color: #aaa;
}
`;
