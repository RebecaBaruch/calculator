import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{}>`
    * {
        font-family: 'Roboto', sans-serif;
    }

    .wrapper{
        display: flex;
        justify-content: center;
        align-items: start;
        padding: 80px;
        width: 100vw;
        height: 100vh;
        background-color: #0C0929;
        color: white;
        font-family: 'Roboto', sans-serif;
    }
`

export default GlobalStyle;