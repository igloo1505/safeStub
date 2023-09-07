import { z } from 'zod';
import { TicketGroupSelectObjectSchema } from './objects/TicketGroupSelect.schema';
import { TicketGroupIncludeObjectSchema } from './objects/TicketGroupInclude.schema';
import { TicketGroupWhereUniqueInputObjectSchema } from './objects/TicketGroupWhereUniqueInput.schema';
import { TicketGroupCreateInputObjectSchema } from './objects/TicketGroupCreateInput.schema';
import { TicketGroupUncheckedCreateInputObjectSchema } from './objects/TicketGroupUncheckedCreateInput.schema';
import { TicketGroupUpdateInputObjectSchema } from './objects/TicketGroupUpdateInput.schema';
import { TicketGroupUncheckedUpdateInputObjectSchema } from './objects/TicketGroupUncheckedUpdateInput.schema';

export const TicketGroupUpsertSchema = z.object({
  select: TicketGroupSelectObjectSchema.optional(),
  include: TicketGroupIncludeObjectSchema.optional(),
  where: TicketGroupWhereUniqueInputObjectSchema,
  create: z.union([
    TicketGroupCreateInputObjectSchema,
    TicketGroupUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TicketGroupUpdateInputObjectSchema,
    TicketGroupUncheckedUpdateInputObjectSchema,
  ]),
});
