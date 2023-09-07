import * as Yup from 'yup';

export const EventOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["title","description"])