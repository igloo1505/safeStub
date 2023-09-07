import { z } from 'zod';
import { TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/TicketOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';
import { TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';
import { TicketScalarFieldEnumSchema } from './enums/TicketScalarFieldEnum.schema';

export const TicketFindFirstSchema = z.object({
  select: TicketSelectObjectSchema.optional(),
  include: TicketIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      TicketOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      TicketOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: TicketWhereInputObjectSchema.optional(),
  cursor: TicketWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TicketScalarFieldEnumSchema).optional(),
});
