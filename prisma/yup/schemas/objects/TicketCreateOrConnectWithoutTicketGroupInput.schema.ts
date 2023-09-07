// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketWhereUniqueInputObjectSchema } from '../internals';;
import { TicketCreateWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketUncheckedCreateWithoutTicketGroupInputObjectSchema } from '../internals';

export const TicketCreateOrConnectWithoutTicketGroupInputObjectSchema = Yup.object({
    where: TicketWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TicketCreateWithoutTicketGroupInputObjectSchema,
TicketUncheckedCreateWithoutTicketGroupInputObjectSchema])
});
