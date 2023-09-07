import * as Yup from 'yup';

export const PersonalDetailsScalarFieldEnumSchema = Yup.mixed().oneOf(["id","userId"])