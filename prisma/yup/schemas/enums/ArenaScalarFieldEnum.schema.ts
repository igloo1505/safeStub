import * as Yup from 'yup';

export const ArenaScalarFieldEnumSchema = Yup.mixed().oneOf(["id","uniqueKey","name","arenaAmenitiesId","locationId","sectionImageId"])