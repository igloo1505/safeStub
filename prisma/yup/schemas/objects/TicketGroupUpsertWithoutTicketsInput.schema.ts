// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupUpdateWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedUpdateWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupCreateWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema } from '../internals';

export const TicketGroupUpsertWithoutTicketsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([TicketGroupUpdateWithoutTicketsInputObjectSchema,
TicketGroupUncheckedUpdateWithoutTicketsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TicketGroupCreateWithoutTicketsInputObjectSchema,
TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema])
});
