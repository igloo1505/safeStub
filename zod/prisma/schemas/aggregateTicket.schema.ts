import { z } from 'zod';
import { TicketOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/TicketOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';
import { TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';
import { TicketCountAggregateInputObjectSchema } from './objects/TicketCountAggregateInput.schema';
import { TicketMinAggregateInputObjectSchema } from './objects/TicketMinAggregateInput.schema';
import { TicketMaxAggregateInputObjectSchema } from './objects/TicketMaxAggregateInput.schema';
import { TicketAvgAggregateInputObjectSchema } from './objects/TicketAvgAggregateInput.schema';
import { TicketSumAggregateInputObjectSchema } from './objects/TicketSumAggregateInput.schema';

export const TicketAggregateSchema = z.object({
  orderBy: z
    .union([
      TicketOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      TicketOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: TicketWhereInputObjectSchema.optional(),
  cursor: TicketWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TicketCountAggregateInputObjectSchema])
    .optional(),
  _min: TicketMinAggregateInputObjectSchema.optional(),
  _max: TicketMaxAggregateInputObjectSchema.optional(),
  _avg: TicketAvgAggregateInputObjectSchema.optional(),
  _sum: TicketSumAggregateInputObjectSchema.optional(),
});
