import * as Yup from 'yup';

export const ROLESchema = Yup.mixed().oneOf(["USER","ADMIN","BANNED","EMPLOYEE"])