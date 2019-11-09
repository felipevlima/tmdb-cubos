import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Abel|Lato:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased !important;
  }

  header {
    font-family: 'Abel';
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: 'Lato';
  }

  button {
    cursor: pointer;
  }
`;
