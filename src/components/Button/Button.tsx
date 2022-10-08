import { FC } from 'react';
import { IButton } from '../../interfaces/interfaces';
import { ButtonStyled } from './button.style';

const Button:FC<IButton> = ( {color, content, strong} ) => {
  return (
    <ButtonStyled color={color} strong={strong}>{strong && <span>{strong}</span> }{content}</ButtonStyled>
  );
};

export default Button;