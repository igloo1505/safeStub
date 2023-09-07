// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventUpdateWithoutTicketsInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutTicketsInputObjectSchema } from '../internals';;
import { EventCreateWithoutTicketsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutTicketsInputObjectSchema } from '../internals';

export const EventUpsertWithoutTicketsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([EventUpdateWithoutTicketsInputObjectSchema,
EventUncheckedUpdateWithoutTicketsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([EventCreateWithoutTicketsInputObjectSchema,
EventUncheckedCreateWithoutTicketsInputObjectSchema])
});
