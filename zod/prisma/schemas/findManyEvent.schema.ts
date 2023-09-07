import { z } from 'zod';
import { EventSelectObjectSchema } from './objects/EventSelect.schema';
import { EventIncludeObjectSchema } from './objects/EventInclude.schema';
import { EventOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/EventOrderByWithRelationAndSearchRelevanceInput.schema';
import { EventWhereInputObjectSchema } from './objects/EventWhereInput.schema';
import { EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';
import { EventScalarFieldEnumSchema } from './enums/EventScalarFieldEnum.schema';

export const EventFindManySchema = z.object({
  select: z.lazy(() => EventSelectObjectSchema.optional()),
  include: z.lazy(() => EventIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      EventOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      EventOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: EventWhereInputObjectSchema.optional(),
  cursor: EventWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(EventScalarFieldEnumSchema).optional(),
});
