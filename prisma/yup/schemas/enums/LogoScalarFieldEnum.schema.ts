import * as Yup from 'yup';

export const LogoScalarFieldEnumSchema = Yup.mixed().oneOf(["id","path","width","height","rel","url","teamId"])