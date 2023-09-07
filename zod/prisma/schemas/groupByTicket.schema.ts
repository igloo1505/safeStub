import { z } from 'zod';
import { TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';
import { TicketOrderByWithAggregationInputObjectSchema } from './objects/TicketOrderByWithAggregationInput.schema';
import { TicketScalarWhereWithAggregatesInputObjectSchema } from './objects/TicketScalarWhereWithAggregatesInput.schema';
import { TicketScalarFieldEnumSchema } from './enums/TicketScalarFieldEnum.schema';

export const TicketGroupBySchema = z.object({
  where: TicketWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TicketOrderByWithAggregationInputObjectSchema,
      TicketOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TicketScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TicketScalarFieldEnumSchema),
});
