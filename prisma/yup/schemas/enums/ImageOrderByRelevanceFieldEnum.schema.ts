import * as Yup from 'yup';

export const ImageOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["publicUrl"])