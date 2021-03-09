import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: '#FFFFFF',
    background: '#E5E5E5',
    header: '#343C58',
    text: '#1E2124',
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    border: none;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    font-family: 'Roboto', 'Ubuntu', 'Fira Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #eee;
    margin: 0;
  }
  button {
    cursor: pointer;
  }
`;