// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupWhereUniqueInputObjectSchema } from '../internals';;
import { TicketGroupUpdateWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedUpdateWithoutEventInputObjectSchema } from '../internals';

export const TicketGroupUpdateWithWhereUniqueWithoutEventInputObjectSchema = Yup.object({
    where: TicketGroupWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TicketGroupUpdateWithoutEventInputObjectSchema,
TicketGroupUncheckedUpdateWithoutEventInputObjectSchema])
});
