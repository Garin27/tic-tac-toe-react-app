import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        ${(props) => props.theme.media.mobile} {
            font-size: 11px;
        }
    }

    body {
    background-color: ${(props) => props.theme.colors.primary};
    }
`;   




