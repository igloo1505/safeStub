import * as Yup from 'yup';

export const ColorsOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["primary","secondary"])