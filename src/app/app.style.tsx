import styled from 'styled-components';

export const AppStyled = styled.main`
    justify-self: center;
    align-self: center;
    width: 90%;
    margin:0 auto;
    display: grid;
    grid-template-columns: 100%;

    @media screen and (min-width:1000px) {

    grid-template-columns: 50% 50%;
    max-width: 1440px;
}
`; 

export const SectionInfoStyled = styled.section`
    text-align: center;
    color:white;
`;

export const SectionFormStyled = styled.section`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`;