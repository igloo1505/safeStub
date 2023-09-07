// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupWhereUniqueInputObjectSchema } from '../internals';;
import { TicketGroupUpdateWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedUpdateWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupCreateWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedCreateWithoutEventInputObjectSchema } from '../internals';

export const TicketGroupUpsertWithWhereUniqueWithoutEventInputObjectSchema = Yup.object({
    where: TicketGroupWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TicketGroupUpdateWithoutEventInputObjectSchema,
TicketGroupUncheckedUpdateWithoutEventInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TicketGroupCreateWithoutEventInputObjectSchema,
TicketGroupUncheckedCreateWithoutEventInputObjectSchema])
});
