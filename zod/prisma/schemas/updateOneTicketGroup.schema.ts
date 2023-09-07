import { z } from 'zod';
import { TicketGroupSelectObjectSchema } from './objects/TicketGroupSelect.schema';
import { TicketGroupIncludeObjectSchema } from './objects/TicketGroupInclude.schema';
import { TicketGroupUpdateInputObjectSchema } from './objects/TicketGroupUpdateInput.schema';
import { TicketGroupUncheckedUpdateInputObjectSchema } from './objects/TicketGroupUncheckedUpdateInput.schema';
import { TicketGroupWhereUniqueInputObjectSchema } from './objects/TicketGroupWhereUniqueInput.schema';

export const TicketGroupUpdateOneSchema = z.object({
  select: TicketGroupSelectObjectSchema.optional(),
  include: TicketGroupIncludeObjectSchema.optional(),
  data: z.union([
    TicketGroupUpdateInputObjectSchema,
    TicketGroupUncheckedUpdateInputObjectSchema,
  ]),
  where: TicketGroupWhereUniqueInputObjectSchema,
});
