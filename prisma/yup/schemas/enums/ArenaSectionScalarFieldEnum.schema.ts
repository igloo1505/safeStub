import * as Yup from 'yup';

export const ArenaSectionScalarFieldEnumSchema = Yup.mixed().oneOf(["id","name","arenaId"])