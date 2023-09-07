import { z } from 'zod';
import { PersonalDetailsWhereInputObjectSchema } from './objects/PersonalDetailsWhereInput.schema';
import { PersonalDetailsOrderByWithAggregationInputObjectSchema } from './objects/PersonalDetailsOrderByWithAggregationInput.schema';
import { PersonalDetailsScalarWhereWithAggregatesInputObjectSchema } from './objects/PersonalDetailsScalarWhereWithAggregatesInput.schema';
import { PersonalDetailsScalarFieldEnumSchema } from './enums/PersonalDetailsScalarFieldEnum.schema';

export const PersonalDetailsGroupBySchema = z.object({
  where: PersonalDetailsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PersonalDetailsOrderByWithAggregationInputObjectSchema,
      PersonalDetailsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PersonalDetailsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PersonalDetailsScalarFieldEnumSchema),
});
