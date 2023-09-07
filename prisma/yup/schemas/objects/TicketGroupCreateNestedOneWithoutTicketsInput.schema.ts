// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupCreateWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupCreateOrConnectWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupWhereUniqueInputObjectSchema } from '../internals';

export const TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TicketGroupCreateWithoutTicketsInputObjectSchema,
TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema]),  connectOrCreate: TicketGroupCreateOrConnectWithoutTicketsInputObjectSchema,  connect: TicketGroupWhereUniqueInputObjectSchema
});
