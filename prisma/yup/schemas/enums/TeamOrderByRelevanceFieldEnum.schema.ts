import * as Yup from 'yup';

export const TeamOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["uniqueKey","abbreviation","displayName","displayName_short","nickname"])