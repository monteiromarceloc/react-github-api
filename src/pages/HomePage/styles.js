import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
    position: relative;
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
    background-color: #30363d;
    border-radius: 4px;
    margin: 6px;
    padding: 0 6px;
    cursor: pointer;
    position: relative;
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
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: wrap;
`;

export const Button = styled.button`
  background: #1E88E5;
  color: #ddd;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: .5px solid #666;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

export const Flag = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #30d63d;

`