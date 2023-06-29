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
        width: 100%;
        overflow-x: hidden;
        
        background-color: #08061c;
        /* background: linear-gradient(341deg, rgba(41, 15, 134, 0.7) 0%, rgba(12, 9, 41, 0.00) 43%), 
        linear-gradient(16deg, rgba(255, 75, 4, 0.306) 0%, rgba(12, 9, 41, 0.00) 43%), #0B0828;         */
        color: white;
    }

    .fetchResultWrapper{
        flex-direction: column;
        gap: 63px;
        
        padding: 80px 133px;
    }

    .container{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 33px 7%;
        align-items: start;

        overflow: hidden;
    }

    .movieWrapper{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 13px;
        align-items: center;
        width: 130px;
        text-align: center;
    }
    
    .movieWrapper h1{
        margin: 0;
        font-size: 1rem;
    }

    .movieWrapper h2{
        margin: 0;
        font-family: 'Open Sans', 'sans-serif';
        font-size: 1rem;
        font-weight: 300;
    }

    .pageButtonsBox{
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 13px;
        align-items: center;
    }

    .pagesMarkBox{
        display: flex;
        justify-content: end;
        flex-direction: row;
        gap: 33px;
        align-items: center;

        width: 100%;
        border-top: 0.3px solid #ffffff61;
    }

    .pagesMarkBox h1{
        font-size: 1.3rem;
    }
`

export default GlobalStyle;