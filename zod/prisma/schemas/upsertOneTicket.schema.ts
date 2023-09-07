import { z } from 'zod';
import { TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';
import { TicketCreateInputObjectSchema } from './objects/TicketCreateInput.schema';
import { TicketUncheckedCreateInputObjectSchema } from './objects/TicketUncheckedCreateInput.schema';
import { TicketUpdateInputObjectSchema } from './objects/TicketUpdateInput.schema';
import { TicketUncheckedUpdateInputObjectSchema } from './objects/TicketUncheckedUpdateInput.schema';

export const TicketUpsertSchema = z.object({
  select: TicketSelectObjectSchema.optional(),
  include: TicketIncludeObjectSchema.optional(),
  where: TicketWhereUniqueInputObjectSchema,
  create: z.union([
    TicketCreateInputObjectSchema,
    TicketUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TicketUpdateInputObjectSchema,
    TicketUncheckedUpdateInputObjectSchema,
  ]),
});
