import { ValidationError } from 'class-validator';

// 获取校验异常信息
export const getErrorMsg = (errors: ValidationError[]) => {
  if (!errors.length) {
    return '';
  }

  let errorList = errors;
  while (!errorList[0].constraints) {
    errorList = errorList[0].children;
  }

  return Object.values(errorList[0].constraints)[0];
};
