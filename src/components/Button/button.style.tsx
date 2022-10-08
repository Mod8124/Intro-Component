import styled from 'styled-components';
import { IButton } from '../../interfaces/interfaces';
import { colors } from '../../helpers/color';

export const ButtonStyled = styled.button<IButton>`
    background-color:${(props)=> props.color};
    color:${(props)=> props.color === colors.accent.Blue ? colors.neutral.GrayishBlue  : 'white'};
    padding-top: ${(props)=>props.color === colors.primary.Green ? '16px':'20px'};
    padding-bottom: ${(props)=>props.color === colors.primary.Green ? '16px':'20px'};
    padding-left: 60px;
    padding-right: 60px;
    border-radius:  ${(props)=>props.color === colors.primary.Green ? '4px':'10px'};
    font-size: 0.9em;
    box-shadow:0px 4px 0px rgba(0, 0, 0, 0.1);
    line-height: 26px;
    font-weight: 400;
    max-width: 550px;
    width:100%;
    margin:0 auto;
    border:none;
    transition:all 0.5s;
    cursor: ${(props)=>props.color === colors.primary.Green && 'pointer'};

    &:hover {
        opacity: 0.9;
    }

    span {
        font-weight:800;
        color:white;
        padding-right:4px;
    }
`;