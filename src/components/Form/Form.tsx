import { FC } from 'react';
import { colors } from '../../helpers/color';
import Button from '../Button/Button';
import { FormStyled, DivStyled, InputStyled, TermStyled, ImgStyled } from './form.style';
import IconError  from '../../assets/images/icon-error.svg';
import Error from '../Error/Error';
import FormLogic from './form.logic';

const Form:FC = () => {
  const { register, handleSubmit, errors, onSubmit } = FormLogic();
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <DivStyled>
        <InputStyled type="text" placeholder='First Name' autoComplete='on' {...register('firstName')}/>
        {errors.firstName && <ImgStyled src={IconError}></ImgStyled>}
        {errors.firstName && <Error msg={errors.firstName?.message}></Error> }
      </DivStyled>

      <DivStyled>
        <InputStyled type="text" placeholder='Last Name' autoComplete='on' {...register('lastName')}/>
        {errors.lastName && <ImgStyled src={IconError}></ImgStyled>}
        {errors.lastName && <Error msg={errors.lastName?.message}></Error> }
      </DivStyled>

      <DivStyled>
        <InputStyled type="text" placeholder='Email Adress' autoComplete='on' {...register('email')}/>
        {errors.email && <ImgStyled src={IconError}></ImgStyled>}
        {errors.email && <Error msg={errors.email?.message}></Error> }
      </DivStyled>
     
      <DivStyled>
        <InputStyled type="text" placeholder='Password' autoComplete='on' {...register('password')}/>
        {errors.password && <ImgStyled src={IconError}></ImgStyled>}
        {errors.password && <Error msg={errors.password?.message}></Error> }
      </DivStyled>

      <Button color={colors.primary.Green} content="Claim your free trial"></Button>

      <TermStyled>By clicking the button, you are agreeing to our <a>Terms and Services</a></TermStyled>
    </FormStyled>
  );
};

export default Form;