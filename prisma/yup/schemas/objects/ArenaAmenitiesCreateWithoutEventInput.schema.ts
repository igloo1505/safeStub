// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateNestedManyWithoutAmenitiesInputObjectSchema } from '../internals';

export const ArenaAmenitiesCreateWithoutEventInputObjectSchema = Yup.object({
    food: Yup.boolean(),  alcohol: Yup.boolean(),  shuttleAvailable: Yup.boolean(),  Arena: ArenaCreateNestedManyWithoutAmenitiesInputObjectSchema
});
