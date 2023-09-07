import { z } from 'zod';
import { TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketUpdateInputObjectSchema } from './objects/TicketUpdateInput.schema';
import { TicketUncheckedUpdateInputObjectSchema } from './objects/TicketUncheckedUpdateInput.schema';
import { TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';

export const TicketUpdateOneSchema = z.object({
  select: TicketSelectObjectSchema.optional(),
  include: TicketIncludeObjectSchema.optional(),
  data: z.union([
    TicketUpdateInputObjectSchema,
    TicketUncheckedUpdateInputObjectSchema,
  ]),
  where: TicketWhereUniqueInputObjectSchema,
});
