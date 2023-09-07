import { z } from 'zod';
import { ColorsWhereInputObjectSchema } from './objects/ColorsWhereInput.schema';
import { ColorsOrderByWithAggregationInputObjectSchema } from './objects/ColorsOrderByWithAggregationInput.schema';
import { ColorsScalarWhereWithAggregatesInputObjectSchema } from './objects/ColorsScalarWhereWithAggregatesInput.schema';
import { ColorsScalarFieldEnumSchema } from './enums/ColorsScalarFieldEnum.schema';

export const ColorsGroupBySchema = z.object({
  where: ColorsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ColorsOrderByWithAggregationInputObjectSchema,
      ColorsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ColorsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ColorsScalarFieldEnumSchema),
});
