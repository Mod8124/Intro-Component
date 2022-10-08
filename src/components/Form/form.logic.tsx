import { useForm } from 'react-hook-form';
import { ShemaValidation } from '../../validations/shemaValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormInput } from '../../interfaces/interfaces';

const FormLogic = ( ) => {

  const { register, handleSubmit, formState:{ errors } } = useForm<IFormInput>({
    resolver:yupResolver(ShemaValidation)
  });

  const onSubmit = (data:IFormInput)=> {
    console.log(data);
  };
  return {
    register,
    handleSubmit,
    errors,
    onSubmit
  };
};

export default FormLogic;