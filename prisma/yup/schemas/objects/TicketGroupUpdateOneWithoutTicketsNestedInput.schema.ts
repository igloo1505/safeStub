// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupCreateWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupCreateOrConnectWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupUpsertWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupWhereUniqueInputObjectSchema } from '../internals';;
import { TicketGroupUpdateWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedUpdateWithoutTicketsInputObjectSchema } from '../internals';

export const TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TicketGroupCreateWithoutTicketsInputObjectSchema,
TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema]),  connectOrCreate: TicketGroupCreateOrConnectWithoutTicketsInputObjectSchema,  upsert: TicketGroupUpsertWithoutTicketsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: TicketGroupWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TicketGroupUpdateWithoutTicketsInputObjectSchema,
TicketGroupUncheckedUpdateWithoutTicketsInputObjectSchema])
});
