import { FC } from 'react';
import { IError } from '../../interfaces/interfaces';
import { ErrorStyled } from './error.style';

const Error:FC<IError> = ({ msg }) => {
  return (
    <ErrorStyled>{msg}</ErrorStyled>
  );
};

export default Error;