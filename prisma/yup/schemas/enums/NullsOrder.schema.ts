import * as Yup from 'yup';

export const NullsOrderSchema = Yup.mixed().oneOf(["first","last"])