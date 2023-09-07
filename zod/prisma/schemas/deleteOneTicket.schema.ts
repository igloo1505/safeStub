import { z } from 'zod';
import { TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';

export const TicketDeleteOneSchema = z.object({
  select: TicketSelectObjectSchema.optional(),
  include: TicketIncludeObjectSchema.optional(),
  where: TicketWhereUniqueInputObjectSchema,
});
