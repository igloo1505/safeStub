import * as Yup from 'yup';

export const TeamScalarFieldEnumSchema = Yup.mixed().oneOf(["id","uniqueKey","name","abbreviation","displayName","displayName_short","nickname","league","sport","conference","division","homeArenaId","eventId","colorsId"])