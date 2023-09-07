import * as Yup from 'yup';

export const LegalNameOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["first","middle","last"])