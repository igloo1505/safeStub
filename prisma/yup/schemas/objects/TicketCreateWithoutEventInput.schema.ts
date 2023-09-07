// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema } from '../internals';;
import { ArenaSectionCreateNestedOneWithoutTicketInputObjectSchema } from '../internals';

export const TicketCreateWithoutEventInputObjectSchema = Yup.object({
    TicketGroup: TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema,  arenaSection: ArenaSectionCreateNestedOneWithoutTicketInputObjectSchema
});
