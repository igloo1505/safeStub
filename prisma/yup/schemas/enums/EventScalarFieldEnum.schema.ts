import * as Yup from 'yup';

export const EventScalarFieldEnumSchema = Yup.mixed().oneOf(["id","category","arenaId","amenitiesId","date","title","description"])