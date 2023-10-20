import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
}

body {
  font-family: "Open Sans", sans-serif;
  color: black;
  font-weight: 400;
  line-height: 1.4;
  min-height: 100vh;
  padding-bottom: 6rem;
  overflow-x: hidden;
  margin: 48px 96px;
}


`;

export default GlobalStyles;
