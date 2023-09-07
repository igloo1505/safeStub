// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketScalarWhereInputObjectSchema } from '../internals';;
import { TicketUpdateManyMutationInputObjectSchema } from '../internals';;
import { TicketUncheckedUpdateManyWithoutTicketInputObjectSchema } from '../internals';

export const TicketUpdateManyWithWhereWithoutArenaSectionInputObjectSchema = Yup.object({
    where: TicketScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TicketUpdateManyMutationInputObjectSchema,
TicketUncheckedUpdateManyWithoutTicketInputObjectSchema])
});
