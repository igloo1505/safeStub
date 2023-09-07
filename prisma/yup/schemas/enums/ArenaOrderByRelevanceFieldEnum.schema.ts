import * as Yup from 'yup';

export const ArenaOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["uniqueKey","name"])