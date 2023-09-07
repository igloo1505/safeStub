import { z } from 'zod';
import { TicketCreateManyInputObjectSchema } from './objects/TicketCreateManyInput.schema';

export const TicketCreateManySchema = z.object({
  data: z.union([
    TicketCreateManyInputObjectSchema,
    z.array(TicketCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
