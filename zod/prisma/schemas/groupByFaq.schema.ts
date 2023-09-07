import { z } from 'zod';
import { FaqWhereInputObjectSchema } from './objects/FaqWhereInput.schema';
import { FaqOrderByWithAggregationInputObjectSchema } from './objects/FaqOrderByWithAggregationInput.schema';
import { FaqScalarWhereWithAggregatesInputObjectSchema } from './objects/FaqScalarWhereWithAggregatesInput.schema';
import { FaqScalarFieldEnumSchema } from './enums/FaqScalarFieldEnum.schema';

export const FaqGroupBySchema = z.object({
  where: FaqWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FaqOrderByWithAggregationInputObjectSchema,
      FaqOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: FaqScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FaqScalarFieldEnumSchema),
});
