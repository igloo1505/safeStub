import { z } from 'zod';
import { LegalNameOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/LegalNameOrderByWithRelationAndSearchRelevanceInput.schema';
import { LegalNameWhereInputObjectSchema } from './objects/LegalNameWhereInput.schema';
import { LegalNameWhereUniqueInputObjectSchema } from './objects/LegalNameWhereUniqueInput.schema';
import { LegalNameCountAggregateInputObjectSchema } from './objects/LegalNameCountAggregateInput.schema';
import { LegalNameMinAggregateInputObjectSchema } from './objects/LegalNameMinAggregateInput.schema';
import { LegalNameMaxAggregateInputObjectSchema } from './objects/LegalNameMaxAggregateInput.schema';
import { LegalNameAvgAggregateInputObjectSchema } from './objects/LegalNameAvgAggregateInput.schema';
import { LegalNameSumAggregateInputObjectSchema } from './objects/LegalNameSumAggregateInput.schema';

export const LegalNameAggregateSchema = z.object({
  orderBy: z
    .union([
      LegalNameOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      LegalNameOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: LegalNameWhereInputObjectSchema.optional(),
  cursor: LegalNameWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), LegalNameCountAggregateInputObjectSchema])
    .optional(),
  _min: LegalNameMinAggregateInputObjectSchema.optional(),
  _max: LegalNameMaxAggregateInputObjectSchema.optional(),
  _avg: LegalNameAvgAggregateInputObjectSchema.optional(),
  _sum: LegalNameSumAggregateInputObjectSchema.optional(),
});
