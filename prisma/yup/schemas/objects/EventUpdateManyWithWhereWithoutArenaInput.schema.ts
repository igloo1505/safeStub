// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventScalarWhereInputObjectSchema } from '../internals';;
import { EventUpdateManyMutationInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateManyWithoutEventsInputObjectSchema } from '../internals';

export const EventUpdateManyWithWhereWithoutArenaInputObjectSchema = Yup.object({
    where: EventScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([EventUpdateManyMutationInputObjectSchema,
EventUncheckedUpdateManyWithoutEventsInputObjectSchema])
});
