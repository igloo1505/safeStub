// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupWhereUniqueInputObjectSchema } from '../internals';;
import { TicketGroupCreateWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema } from '../internals';

export const TicketGroupCreateOrConnectWithoutTicketsInputObjectSchema = Yup.object({
    where: TicketGroupWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TicketGroupCreateWithoutTicketsInputObjectSchema,
TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema])
});
