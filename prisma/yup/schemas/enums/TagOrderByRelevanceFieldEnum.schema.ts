import * as Yup from 'yup';

export const TagOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["value"])