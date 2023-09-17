import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './ArenaOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketOrderByRelationAggregateInputObjectSchema } from './TicketOrderByRelationAggregateInput.schema';
import { TicketGroupOrderByRelationAggregateInputObjectSchema } from './TicketGroupOrderByRelationAggregateInput.schema';
import { ArenaSectionOrderByRelevanceInputObjectSchema } from './ArenaSectionOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      arenaId: z.lazy(() => SortOrderSchema).optional(),
      section: z.lazy(() => SortOrderSchema).optional(),
      row: z.lazy(() => SortOrderSchema).optional(),
      Arena: z
        .lazy(() => ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      Ticket: z
        .lazy(() => TicketOrderByRelationAggregateInputObjectSchema)
        .optional(),
      TicketGroup: z
        .lazy(() => TicketGroupOrderByRelationAggregateInputObjectSchema)
        .optional(),
      _relevance: z
        .lazy(() => ArenaSectionOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
