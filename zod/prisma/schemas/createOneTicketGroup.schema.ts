import { z } from 'zod';
import { TicketGroupSelectObjectSchema } from './objects/TicketGroupSelect.schema';
import { TicketGroupIncludeObjectSchema } from './objects/TicketGroupInclude.schema';
import { TicketGroupCreateInputObjectSchema } from './objects/TicketGroupCreateInput.schema';
import { TicketGroupUncheckedCreateInputObjectSchema } from './objects/TicketGroupUncheckedCreateInput.schema';

export const TicketGroupCreateOneSchema = z.object({
  select: TicketGroupSelectObjectSchema.optional(),
  include: TicketGroupIncludeObjectSchema.optional(),
  data: z.union([
    TicketGroupCreateInputObjectSchema,
    TicketGroupUncheckedCreateInputObjectSchema,
  ]),
});
