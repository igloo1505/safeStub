// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateNestedManyWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventCreateNestedManyWithoutAmenitiesInputObjectSchema } from '../internals';

export const ArenaAmenitiesCreateInputObjectSchema = Yup.object({
    food: Yup.boolean(),  alcohol: Yup.boolean(),  shuttleAvailable: Yup.boolean(),  Arena: ArenaCreateNestedManyWithoutAmenitiesInputObjectSchema,  Event: EventCreateNestedManyWithoutAmenitiesInputObjectSchema
});
