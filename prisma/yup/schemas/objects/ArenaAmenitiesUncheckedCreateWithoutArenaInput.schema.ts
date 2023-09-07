// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventUncheckedCreateNestedManyWithoutAmenitiesInputObjectSchema } from '../internals';

export const ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema = Yup.object({
    id: Yup.number(),  food: Yup.boolean(),  alcohol: Yup.boolean(),  shuttleAvailable: Yup.boolean(),  Event: EventUncheckedCreateNestedManyWithoutAmenitiesInputObjectSchema
});
