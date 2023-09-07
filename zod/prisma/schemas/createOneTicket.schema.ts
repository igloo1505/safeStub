import { z } from 'zod';
import { TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketCreateInputObjectSchema } from './objects/TicketCreateInput.schema';
import { TicketUncheckedCreateInputObjectSchema } from './objects/TicketUncheckedCreateInput.schema';

export const TicketCreateOneSchema = z.object({
  select: TicketSelectObjectSchema.optional(),
  include: TicketIncludeObjectSchema.optional(),
  data: z.union([
    TicketCreateInputObjectSchema,
    TicketUncheckedCreateInputObjectSchema,
  ]),
});
