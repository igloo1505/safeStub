import * as Yup from 'yup';

export const LegalNameScalarFieldEnumSchema = Yup.mixed().oneOf(["first","middle","last","detailsId"])