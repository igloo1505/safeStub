import * as Yup from 'yup';

export const ColorsScalarFieldEnumSchema = Yup.mixed().oneOf(["id","primary","secondary"])