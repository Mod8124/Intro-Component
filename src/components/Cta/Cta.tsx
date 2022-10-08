import {FC} from 'react';
import { ICta } from '../../interfaces/interfaces';
import { CtaStyled, TitleStyled, ParaStyled  } from './Cta.style';

const Cta:FC<ICta> = ({ title, para }) => {
  return (
    <CtaStyled>
      <TitleStyled>{title}</TitleStyled>
      <ParaStyled>{para}</ParaStyled>
    </CtaStyled>
  );
};

export default Cta;