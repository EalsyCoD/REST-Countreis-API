import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
  }
  body {
    background-color: ${(props) => props.theme.colors.headerColor};
    color: ${(props) => props.theme.colors.text};
    transition: background-color 500ms linear;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
`