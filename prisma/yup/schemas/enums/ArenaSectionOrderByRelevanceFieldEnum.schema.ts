import * as Yup from 'yup';

export const ArenaSectionOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["name"])