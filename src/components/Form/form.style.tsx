import styled from 'styled-components';
import { colors } from '../../helpers/color';

export const FormStyled = styled.form`
    background:white;
    padding: 30px 40px 30px 40px;
    width: 100%;
    max-width: 550px;
    border-radius: 10px;
    margin-top:30px;
    box-shadow:0px 4px 0px rgba(0, 0, 0, 0.1);

    button {
        margin-top:20px;
    }
`;

export const DivStyled = styled.div`
    position:relative;
`;

export const InputStyled = styled.input`
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-top: 24px;
    border-radius:4px;
    color:${colors.neutral.DarkBlue} ;
    border:1px solid  ${colors.neutral.GrayishBlue};
    padding-left: 30px;
    transition: all 0.5s;
    outline:none;



    &::placeholder {
        color:${colors.neutral.DarkBlue};
    }
`;

export const TermStyled = styled.p`
 padding-top: 10px;
    font-size: 10px;
    text-align: center;
    width: 100%;
    color:${colors.neutral.GrayishBlue};

    a {
        color:${colors.primary.Red};
    }

    @media screen and (min-width:1000px) {
        font-size: 0.7em;
        padding-top: 14px;
}

`;

export const ImgStyled = styled.img`
    position: absolute;
    right: 4%;
    top:40%;
    display: block;
`;