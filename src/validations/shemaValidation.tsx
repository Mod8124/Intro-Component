import * as yup from 'yup';

export const ShemaValidation = yup.object().shape({
  firstName:yup.string().required('First Name cannot be empty'),
  lastName:yup.string().required('Last Name cannot be empty'),
  email:yup.string().email('Looks like this is not an email').required('Email Addres cannot be empty'),
  password:yup.string().required('Password cannot be empty').min(4),

});