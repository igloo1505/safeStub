// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventScalarWhereInputObjectSchema } from '../internals';;
import { EventUpdateManyMutationInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateManyWithoutEventInputObjectSchema } from '../internals';

export const EventUpdateManyWithWhereWithoutAmenitiesInputObjectSchema = Yup.object({
    where: EventScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([EventUpdateManyMutationInputObjectSchema,
EventUncheckedUpdateManyWithoutEventInputObjectSchema])
});
