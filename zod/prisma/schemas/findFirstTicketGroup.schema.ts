import { z } from 'zod';
import { TicketGroupSelectObjectSchema } from './objects/TicketGroupSelect.schema';
import { TicketGroupIncludeObjectSchema } from './objects/TicketGroupInclude.schema';
import { TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/TicketGroupOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketGroupWhereInputObjectSchema } from './objects/TicketGroupWhereInput.schema';
import { TicketGroupWhereUniqueInputObjectSchema } from './objects/TicketGroupWhereUniqueInput.schema';
import { TicketGroupScalarFieldEnumSchema } from './enums/TicketGroupScalarFieldEnum.schema';

export const TicketGroupFindFirstSchema = z.object({
  select: TicketGroupSelectObjectSchema.optional(),
  include: TicketGroupIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: TicketGroupWhereInputObjectSchema.optional(),
  cursor: TicketGroupWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TicketGroupScalarFieldEnumSchema).optional(),
});
