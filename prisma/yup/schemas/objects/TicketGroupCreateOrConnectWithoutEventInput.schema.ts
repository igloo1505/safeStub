// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupWhereUniqueInputObjectSchema } from '../internals';;
import { TicketGroupCreateWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedCreateWithoutEventInputObjectSchema } from '../internals';

export const TicketGroupCreateOrConnectWithoutEventInputObjectSchema = Yup.object({
    where: TicketGroupWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TicketGroupCreateWithoutEventInputObjectSchema,
TicketGroupUncheckedCreateWithoutEventInputObjectSchema])
});
