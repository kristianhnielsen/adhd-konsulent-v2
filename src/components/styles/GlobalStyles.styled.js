import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0 auto;
    max-width: min(80%, 1080px);
    font-family: "Roboto", sans-serif;
    background-color: ${({theme}) => theme.background};
  }

  h1, h2 {
      font-family: "Merriweather", serif;
      color: ${({theme}) => theme.text.headline};
  }

  p, li, h3, h4, h5 {
      color: ${({theme}) => theme.text.paragraph};

  }

  a {
      color: black;
      text-decoration: none;
  }
`;
