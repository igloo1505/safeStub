// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateNestedManyWithoutLocationInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateNestedOneWithoutLocationInputObjectSchema } from '../internals';

export const LocationCreateInputObjectSchema = Yup.object({
    uniqueKey: Yup.mixed().oneOfSchemas([Yup.string()]),  street: Yup.mixed().oneOfSchemas([Yup.string()]),  zip: Yup.mixed().oneOfSchemas([Yup.number()]),  city: Yup.string().required(),  cityId: Yup.mixed().oneOfSchemas([Yup.number()]),  lat: Yup.mixed().oneOfSchemas([Yup.number()]),  long: Yup.mixed().oneOfSchemas([Yup.number()]),  arena: ArenaCreateNestedManyWithoutLocationInputObjectSchema,  personalDetails: PersonalDetailsCreateNestedOneWithoutLocationInputObjectSchema
});
