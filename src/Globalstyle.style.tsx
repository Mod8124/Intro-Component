import { createGlobalStyle } from 'styled-components';
import backgroundDesktop from './assets/images/bg-intro-mobile.png';
import backgroundMobile from './assets/images/bg-intro-desktop.png';
import { colors } from './helpers/color';

export const GlobalStyles = createGlobalStyle`
    * {
        margin:0px;
        padding:0px;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
    width: 100%;
    min-height: 100vh;
    background-image: url(${backgroundMobile});
    background-color: ${colors.primary.Red};

    justify-content:center;
    align-items:center;

    display:flex;
    flex-wrap:wrap;
    }

    @media screen and (min-width:1000px) {
        
    body {
        background-image: url(${backgroundDesktop});
    }

}
`;