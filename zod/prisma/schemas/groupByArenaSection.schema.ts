import { z } from 'zod';
import { ArenaSectionWhereInputObjectSchema } from './objects/ArenaSectionWhereInput.schema';
import { ArenaSectionOrderByWithAggregationInputObjectSchema } from './objects/ArenaSectionOrderByWithAggregationInput.schema';
import { ArenaSectionScalarWhereWithAggregatesInputObjectSchema } from './objects/ArenaSectionScalarWhereWithAggregatesInput.schema';
import { ArenaSectionScalarFieldEnumSchema } from './enums/ArenaSectionScalarFieldEnum.schema';

export const ArenaSectionGroupBySchema = z.object({
  where: ArenaSectionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ArenaSectionOrderByWithAggregationInputObjectSchema,
      ArenaSectionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ArenaSectionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ArenaSectionScalarFieldEnumSchema),
});
