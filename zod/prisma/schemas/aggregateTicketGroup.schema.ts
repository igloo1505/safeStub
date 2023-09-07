import { z } from 'zod';
import { TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/TicketGroupOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketGroupWhereInputObjectSchema } from './objects/TicketGroupWhereInput.schema';
import { TicketGroupWhereUniqueInputObjectSchema } from './objects/TicketGroupWhereUniqueInput.schema';
import { TicketGroupCountAggregateInputObjectSchema } from './objects/TicketGroupCountAggregateInput.schema';
import { TicketGroupMinAggregateInputObjectSchema } from './objects/TicketGroupMinAggregateInput.schema';
import { TicketGroupMaxAggregateInputObjectSchema } from './objects/TicketGroupMaxAggregateInput.schema';
import { TicketGroupAvgAggregateInputObjectSchema } from './objects/TicketGroupAvgAggregateInput.schema';
import { TicketGroupSumAggregateInputObjectSchema } from './objects/TicketGroupSumAggregateInput.schema';

export const TicketGroupAggregateSchema = z.object({
  orderBy: z
    .union([
      TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: TicketGroupWhereInputObjectSchema.optional(),
  cursor: TicketGroupWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TicketGroupCountAggregateInputObjectSchema])
    .optional(),
  _min: TicketGroupMinAggregateInputObjectSchema.optional(),
  _max: TicketGroupMaxAggregateInputObjectSchema.optional(),
  _avg: TicketGroupAvgAggregateInputObjectSchema.optional(),
  _sum: TicketGroupSumAggregateInputObjectSchema.optional(),
});
