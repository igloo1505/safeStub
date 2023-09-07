// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketWhereUniqueInputObjectSchema } from '../internals';;
import { TicketUpdateWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketUncheckedUpdateWithoutTicketGroupInputObjectSchema } from '../internals';

export const TicketUpdateWithWhereUniqueWithoutTicketGroupInputObjectSchema = Yup.object({
    where: TicketWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TicketUpdateWithoutTicketGroupInputObjectSchema,
TicketUncheckedUpdateWithoutTicketGroupInputObjectSchema])
});
