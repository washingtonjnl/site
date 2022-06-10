import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }
  
  body {
    background: ${(props) => props.theme.colors.neutral[100]};
    color: ${(props) => props.theme.colors.neutral[400]};
    font-family: ${(props) =>
      props.theme.fonts.sansSerif}, -apple-system, Helvetica, sans-serif;
    font-weight: 400;
  }

  input, textarea, button {
    font-family: ${(props) =>
      props.theme.fonts.sansSerif}, -apple-system, Helvetica, sans-serif;
  }

  button{
    cursor: pointer;
  }

  a {
    cursor: pointer;
    color: inherit;
  text-decoration: none;
  }
`;
