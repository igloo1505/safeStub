// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsCreateNestedOneWithoutLocationInputObjectSchema } from '../internals';

export const LocationCreateWithoutArenaInputObjectSchema = Yup.object({
    uniqueKey: Yup.mixed().oneOfSchemas([Yup.string()]),  street: Yup.mixed().oneOfSchemas([Yup.string()]),  zip: Yup.mixed().oneOfSchemas([Yup.number()]),  city: Yup.string().required(),  cityId: Yup.mixed().oneOfSchemas([Yup.number()]),  lat: Yup.mixed().oneOfSchemas([Yup.number()]),  long: Yup.mixed().oneOfSchemas([Yup.number()]),  personalDetails: PersonalDetailsCreateNestedOneWithoutLocationInputObjectSchema
});
