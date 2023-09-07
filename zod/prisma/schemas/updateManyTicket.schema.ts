import { z } from 'zod';
import { TicketUpdateManyMutationInputObjectSchema } from './objects/TicketUpdateManyMutationInput.schema';
import { TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';

export const TicketUpdateManySchema = z.object({
  data: TicketUpdateManyMutationInputObjectSchema,
  where: TicketWhereInputObjectSchema.optional(),
});
