// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketWhereUniqueInputObjectSchema } from '../internals';;
import { TicketUpdateWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketUncheckedUpdateWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketCreateWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketUncheckedCreateWithoutTicketGroupInputObjectSchema } from '../internals';

export const TicketUpsertWithWhereUniqueWithoutTicketGroupInputObjectSchema = Yup.object({
    where: TicketWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TicketUpdateWithoutTicketGroupInputObjectSchema,
TicketUncheckedUpdateWithoutTicketGroupInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TicketCreateWithoutTicketGroupInputObjectSchema,
TicketUncheckedCreateWithoutTicketGroupInputObjectSchema])
});
