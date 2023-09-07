import { z } from 'zod';
import { TicketGroupWhereInputObjectSchema } from './objects/TicketGroupWhereInput.schema';

export const TicketGroupDeleteManySchema = z.object({
  where: TicketGroupWhereInputObjectSchema.optional(),
});
