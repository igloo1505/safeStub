// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EnumAMENITIYFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { BoolFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumPARKINGFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { ArenaUpdateManyWithoutAmenitiesNestedInputObjectSchema } from '../internals';

export const ArenaAmenitiesUpdateWithoutEventInputObjectSchema = Yup.object({
    indoor: Yup.mixed().oneOfSchemas([EnumAMENITIYFieldUpdateOperationsInputObjectSchema]),  covered: Yup.mixed().oneOfSchemas([EnumAMENITIYFieldUpdateOperationsInputObjectSchema]),  outdoor: Yup.mixed().oneOfSchemas([EnumAMENITIYFieldUpdateOperationsInputObjectSchema]),  food: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  alcohol: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  parking: Yup.mixed().oneOfSchemas([EnumPARKINGFieldUpdateOperationsInputObjectSchema]),  shuttleAvailable: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  Arena: ArenaUpdateManyWithoutAmenitiesNestedInputObjectSchema
});
