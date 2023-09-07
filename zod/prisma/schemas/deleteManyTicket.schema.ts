import { z } from 'zod';
import { TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';

export const TicketDeleteManySchema = z.object({
  where: TicketWhereInputObjectSchema.optional(),
});
