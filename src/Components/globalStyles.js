import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Outfit", serif;

  }

  h1 {
    font-family: "Outfit", serif;
    cursor: pointer;
  }
  button{
    background: transparent;
    border: none;
    cursor: pointer;

    
  }
  a{
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
  }
  input{
    outline: none;
    background: transparent;
    border: none;
  }
  a{
    font-family: Outfit, sans-serif;
  }


`;

export default GlobalStyle;
