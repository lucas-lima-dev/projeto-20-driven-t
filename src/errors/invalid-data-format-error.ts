import { ApplicationError } from '@/protocols';

export function invalidFormatError(): ApplicationError {
  return {
    name: 'InvalidFormatError',
    message: 'Data format sent not valid',
  };
}
