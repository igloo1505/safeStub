// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupScalarWhereInputObjectSchema } from '../internals';;
import { TicketGroupUpdateManyMutationInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedUpdateManyWithoutTicketGroupsInputObjectSchema } from '../internals';

export const TicketGroupUpdateManyWithWhereWithoutEventInputObjectSchema = Yup.object({
    where: TicketGroupScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TicketGroupUpdateManyMutationInputObjectSchema,
TicketGroupUncheckedUpdateManyWithoutTicketGroupsInputObjectSchema])
});
