import styled from 'styled-components';

export const CtaStyled = styled.article`

`;

export const TitleStyled = styled.h1`
    padding-top: 40px;
    padding-bottom: 20px;
    font-size: 1.5em;
    width: 80%;
    margin: 0 auto;

    @media screen and (min-width:1000px) {

        padding-top: 180px;
        display: flex;
        align-items: flex-end;
        width: 74%;
        justify-content: center;
        text-align: start;
        font-size: 3em;
   }
`;

export const ParaStyled = styled.p`
    padding-bottom: 40px;
    line-height: 28px;
    font-size: 16px;
    width: 87%;
    margin:0 auto;

    @media screen and (min-width:1000px) {
        padding-top: 10px;
        text-align: start;
        width: 76%;
   }
`;