// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ArenaAmenitiesCreateManyInputObjectSchema = Yup.object({
    id: Yup.number(),  food: Yup.boolean(),  alcohol: Yup.boolean(),  shuttleAvailable: Yup.boolean()
});
