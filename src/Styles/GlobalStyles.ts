import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /* body {
        width:100%;
        height: 100vh;
        background-color: red;
    } */

    * {
        margin: 0;
        padding: 0; //space between margin and content
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0; 
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;