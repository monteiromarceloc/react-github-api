import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
`

export const ProjectContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #161b22;
    border-radius: 8px;
    margin: 16;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #010409;
    border: .5px solid #666;
    border-radius: 6px;
    margin: 8px;
    width: 200px;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ isNew }) => isNew ? "#30d63d" : "#30363d"};
    border-radius: 4px;
    margin: 6px;
    cursor: pointer;
`

export const Title = styled.h1`
  font-size: 16px;
  text-align: center;
  color: #ddd;
`;

export const Text = styled.h1`
  font-size: 12px;
  text-align: center;
  color: #aaa;
`;