// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventCreateWithoutTicketsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutTicketsInputObjectSchema } from '../internals';

export const EventCreateOrConnectWithoutTicketsInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([EventCreateWithoutTicketsInputObjectSchema,
EventUncheckedCreateWithoutTicketsInputObjectSchema])
});
