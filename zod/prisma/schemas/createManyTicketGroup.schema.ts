import { z } from 'zod';
import { TicketGroupCreateManyInputObjectSchema } from './objects/TicketGroupCreateManyInput.schema';

export const TicketGroupCreateManySchema = z.object({
  data: z.union([
    TicketGroupCreateManyInputObjectSchema,
    z.array(TicketGroupCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
