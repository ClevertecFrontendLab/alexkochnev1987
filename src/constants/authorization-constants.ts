import { NavigationRoutes } from './routes';

export enum TitleFormText {
  companyName = 'Cleverland',
  registrationHeading = 'Регистрация',
  repairPassword = 'Восстановление пароля',
}

export enum AuthTextMessages {
  enter = 'Вход в личный кабинет',
  wrong = 'Неверный логин или пароль!',
  repair = 'Восстановить?',
  forgot = 'Забыли логин или пароль?',
}
export const requiredField = 'Поле не может быть пустым';
export const onlyLatinLetters = 'латинский алфавит';
export const nameNumber = 'цифры';
export const minLength = 'не менее 8 символов';
export const uppercaseLetter = 'с заглавной буквой';
export const passwordNumber = ' и цифрой';
export const emailError = 'Введите корректный e-mail';
export const phoneError = 'В формате +375 (xx) xxx-xx-xx';
export const secondPasswordError = 'Пароли не совпадают';

export interface IStepOne {
  username: string;
  password: string;
}

export enum FormFieldsSchema {
  stepOne = 1,
  stepTwo,
  stepThree,
}

export const stepOneFields: InputFieldsText = {
  first: {
    placeHolder: 'Придумайте логин для входа',
    fieldMessage: 'Используйте для логина латинский алфавит и цифры',
    nameInput: 'username',
  },
  second: {
    placeHolder: 'Пароль',
    fieldMessage: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
    nameInput: 'password',
  },
};

export const stepTwoFields: InputFieldsText = {
  first: {
    placeHolder: 'Имя',
    fieldMessage: '',
    nameInput: 'firstName',
  },
  second: {
    placeHolder: 'Фамилия',
    fieldMessage: '',
    nameInput: 'lastName',
  },
};

export const stepThreeFields: InputFieldsText = {
  first: {
    placeHolder: 'Номер телефона',
    fieldMessage: 'В формате +375 (xx) xxx-xx-xx',
    nameInput: 'phone',
  },
  second: {
    placeHolder: 'E-mail',
    fieldMessage: 'Введите корректный e-mail',
    nameInput: 'email',
  },
};

export interface InputFieldsText {
  first: {
    placeHolder: string;
    fieldMessage: string;
    nameInput: string;
  };
  second: {
    placeHolder: string;
    fieldMessage: string;
    nameInput: string;
  };
}

export enum ButtonText {
  'Следующий шаг' = 1,
  'Последний шаг',
  'зарегистрироваться',
}

export interface SubmitButtonForm {
  button: string;
  question: string;
  link: NavigationRoutes;
  linkName: string;
  isValid: boolean;
}

export const LoginButtonValues = {
  button: 'Вход',
  question: 'Нет учетной записи?',
  link: NavigationRoutes.registration,
  linkName: 'Регистрация',
};

export const RegistrationText = {
  question: 'Есть учётная запись?',
  link: NavigationRoutes.login,
  linkName: 'Войти',
};

export const SendEmailButtonValues = {
  button: 'восстановить',
  question: 'Нет учетной записи?',
  link: NavigationRoutes.registration,
  linkName: 'Регистрация',
};

export const ResetPasswordButtonValues = {
  button: 'сохранить изменения',
  question: 'После сохранения войдите в библиотеку, используя новый пароль',
  link: NavigationRoutes.empty,
  linkName: '',
};

export const successMessage = {
  title: 'Регистрация успешна',
  message: 'Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль',
  button: 'вход',
};

export const errorMessage = {
  title: 'Данные не сохранились',
  message: 'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.',
  button: 'назад к регистрации',
};

export const errorMessageServer = {
  title: 'Данные не сохранились',
  message: 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз',
  button: 'повторить',
};
