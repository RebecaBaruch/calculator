import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{}>`
    * {
        font-family: 'Roboto', sans-serif;
    }

    .wrapper{
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 133px;
        align-items: center;
        padding: 80px;
        width: 100vw;
        height: 100vh;
        background-color: #08061c;
        background: linear-gradient(341deg, rgba(41, 15, 134, 0.7) 0%, rgba(12, 9, 41, 0.00) 43%), 
        linear-gradient(16deg, rgba(255, 75, 4, 0.306) 0%, rgba(12, 9, 41, 0.00) 43%), #0B0828;        
        color: white;
    }
`

export default GlobalStyle;