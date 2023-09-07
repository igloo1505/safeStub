import * as Yup from 'yup';

export const TagScalarFieldEnumSchema = Yup.mixed().oneOf(["id","value"])