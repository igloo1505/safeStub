// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateNestedManyWithoutAmenitiesInputObjectSchema } from '../internals';

export const ArenaAmenitiesCreateWithoutArenaInputObjectSchema = Yup.object({
    food: Yup.boolean(),  alcohol: Yup.boolean(),  shuttleAvailable: Yup.boolean(),  Event: EventCreateNestedManyWithoutAmenitiesInputObjectSchema
});
