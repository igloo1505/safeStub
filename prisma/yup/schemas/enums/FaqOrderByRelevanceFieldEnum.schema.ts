import * as Yup from 'yup';

export const FaqOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["title","subtitle","body"])