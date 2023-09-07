// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { TicketOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { ArenaSectionOrderByRelevanceInputObjectSchema } from '../internals';

export const ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  arenaId: SortOrderSchema,  Arena: ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema,  Ticket: TicketOrderByRelationAggregateInputObjectSchema,  _relevance: ArenaSectionOrderByRelevanceInputObjectSchema
});
