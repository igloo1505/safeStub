import { z } from 'zod';
import { TicketGroupWhereInputObjectSchema } from './objects/TicketGroupWhereInput.schema';
import { TicketGroupOrderByWithAggregationInputObjectSchema } from './objects/TicketGroupOrderByWithAggregationInput.schema';
import { TicketGroupScalarWhereWithAggregatesInputObjectSchema } from './objects/TicketGroupScalarWhereWithAggregatesInput.schema';
import { TicketGroupScalarFieldEnumSchema } from './enums/TicketGroupScalarFieldEnum.schema';

export const TicketGroupGroupBySchema = z.object({
  where: TicketGroupWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TicketGroupOrderByWithAggregationInputObjectSchema,
      TicketGroupOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TicketGroupScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TicketGroupScalarFieldEnumSchema),
});
