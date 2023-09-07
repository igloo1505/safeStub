import * as Yup from 'yup';

export const UserOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["email","password"])