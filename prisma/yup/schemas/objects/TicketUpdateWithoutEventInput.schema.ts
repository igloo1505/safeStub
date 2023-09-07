// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema } from '../internals';;
import { ArenaSectionUpdateOneRequiredWithoutTicketNestedInputObjectSchema } from '../internals';

export const TicketUpdateWithoutEventInputObjectSchema = Yup.object({
    TicketGroup: TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema,  arenaSection: ArenaSectionUpdateOneRequiredWithoutTicketNestedInputObjectSchema
});
