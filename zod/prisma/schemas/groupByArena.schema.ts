import { z } from 'zod';
import { ArenaWhereInputObjectSchema } from './objects/ArenaWhereInput.schema';
import { ArenaOrderByWithAggregationInputObjectSchema } from './objects/ArenaOrderByWithAggregationInput.schema';
import { ArenaScalarWhereWithAggregatesInputObjectSchema } from './objects/ArenaScalarWhereWithAggregatesInput.schema';
import { ArenaScalarFieldEnumSchema } from './enums/ArenaScalarFieldEnum.schema';

export const ArenaGroupBySchema = z.object({
  where: ArenaWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ArenaOrderByWithAggregationInputObjectSchema,
      ArenaOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ArenaScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ArenaScalarFieldEnumSchema),
});
