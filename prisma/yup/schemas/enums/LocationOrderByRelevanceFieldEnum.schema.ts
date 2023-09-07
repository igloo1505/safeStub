import * as Yup from 'yup';

export const LocationOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["uniqueKey","street","city"])