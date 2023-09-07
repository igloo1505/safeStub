import { z } from 'zod';
import { LegalNameWhereInputObjectSchema } from './objects/LegalNameWhereInput.schema';
import { LegalNameOrderByWithAggregationInputObjectSchema } from './objects/LegalNameOrderByWithAggregationInput.schema';
import { LegalNameScalarWhereWithAggregatesInputObjectSchema } from './objects/LegalNameScalarWhereWithAggregatesInput.schema';
import { LegalNameScalarFieldEnumSchema } from './enums/LegalNameScalarFieldEnum.schema';

export const LegalNameGroupBySchema = z.object({
  where: LegalNameWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      LegalNameOrderByWithAggregationInputObjectSchema,
      LegalNameOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: LegalNameScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(LegalNameScalarFieldEnumSchema),
});
