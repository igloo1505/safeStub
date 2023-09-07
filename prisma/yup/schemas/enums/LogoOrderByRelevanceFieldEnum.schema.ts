import * as Yup from 'yup';

export const LogoOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["path","rel","url"])