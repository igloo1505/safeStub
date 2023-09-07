import { z } from 'zod';
import { TicketGroupUpdateManyMutationInputObjectSchema } from './objects/TicketGroupUpdateManyMutationInput.schema';
import { TicketGroupWhereInputObjectSchema } from './objects/TicketGroupWhereInput.schema';

export const TicketGroupUpdateManySchema = z.object({
  data: TicketGroupUpdateManyMutationInputObjectSchema,
  where: TicketGroupWhereInputObjectSchema.optional(),
});
