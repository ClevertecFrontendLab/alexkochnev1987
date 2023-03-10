import * as yup from 'yup';

import {
  emailError,
  minLength,
  nameNumber,
  onlyLatinLetters,
  passwordNumber,
  phoneError,
  requiredField,
  secondPasswordError,
  uppercaseLetter,
} from './authorization-constants';

const RegularExpressions = {
  onlyLatinLetters: /[a-zA-Z]/g,
  containNumber: /\d/g,
  containUppercaseLetter: /[A-ZА-Я]/g,
  onlyNumbers: /\D/g,
};

export const schemaStepOne = yup.object().shape({
  username: yup
    .string()
    .required(requiredField)
    .matches(RegularExpressions.onlyLatinLetters, { message: onlyLatinLetters })
    .matches(RegularExpressions.containNumber, nameNumber),

  password: yup
    .string()
    .required(requiredField)
    .min(8, minLength)
    .matches(RegularExpressions.containUppercaseLetter, uppercaseLetter)
    .matches(RegularExpressions.containNumber, passwordNumber),
});
export const schemaStepTwo = yup.object().shape({
  firstName: yup.string().required(requiredField),
  lastName: yup.string().required(requiredField),
});

const checkOperator = (value: string) => {
  const operator = value?.split('(')[1]?.split(')')[0];

  return operator ? ['29', '44', '33', '25'].includes(operator) : false;
};

const checkNumberLength = (value: string) => {
  const getInputNumbers = (string: string) => string.replace(RegularExpressions.onlyNumbers, '');

  return getInputNumbers(value).length === 12 ? true : false;
};

export const schemaStepThree = yup.object().shape({
  phone: yup
    .string()
    .required(requiredField)
    .test('isFullNumber', phoneError, checkNumberLength)
    .test('BelarusOperator', phoneError, checkOperator),
  email: yup.string().required(requiredField).email(emailError),
});

export const schemaSendEmail = yup.object().shape({
  email: yup.string().required(requiredField).email(emailError),
});

export const schemaResetPassword = yup.object().shape({
  password: yup
    .string()
    .required(requiredField)
    .min(8, minLength)
    .matches(RegularExpressions.containUppercaseLetter, uppercaseLetter)
    .matches(RegularExpressions.containNumber, passwordNumber),

  passwordConfirmation: yup
    .string()
    .required(requiredField)
    .when('password', ([password], schema) => schema.matches(password, secondPasswordError)),
});
