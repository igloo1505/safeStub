// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaUncheckedCreateNestedManyWithoutAmenitiesInputObjectSchema } from '../internals';

export const ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema = Yup.object({
    id: Yup.number(),  food: Yup.boolean(),  alcohol: Yup.boolean(),  shuttleAvailable: Yup.boolean(),  Arena: ArenaUncheckedCreateNestedManyWithoutAmenitiesInputObjectSchema
});
