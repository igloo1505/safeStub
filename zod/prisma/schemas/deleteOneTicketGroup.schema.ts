import { z } from 'zod';
import { TicketGroupSelectObjectSchema } from './objects/TicketGroupSelect.schema';
import { TicketGroupIncludeObjectSchema } from './objects/TicketGroupInclude.schema';
import { TicketGroupWhereUniqueInputObjectSchema } from './objects/TicketGroupWhereUniqueInput.schema';

export const TicketGroupDeleteOneSchema = z.object({
  select: TicketGroupSelectObjectSchema.optional(),
  include: TicketGroupIncludeObjectSchema.optional(),
  where: TicketGroupWhereUniqueInputObjectSchema,
});
