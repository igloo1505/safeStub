import { z } from 'zod';
import { PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/PersonalDetailsOrderByWithRelationAndSearchRelevanceInput.schema';
import { PersonalDetailsWhereInputObjectSchema } from './objects/PersonalDetailsWhereInput.schema';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './objects/PersonalDetailsWhereUniqueInput.schema';
import { PersonalDetailsCountAggregateInputObjectSchema } from './objects/PersonalDetailsCountAggregateInput.schema';
import { PersonalDetailsMinAggregateInputObjectSchema } from './objects/PersonalDetailsMinAggregateInput.schema';
import { PersonalDetailsMaxAggregateInputObjectSchema } from './objects/PersonalDetailsMaxAggregateInput.schema';
import { PersonalDetailsAvgAggregateInputObjectSchema } from './objects/PersonalDetailsAvgAggregateInput.schema';
import { PersonalDetailsSumAggregateInputObjectSchema } from './objects/PersonalDetailsSumAggregateInput.schema';

export const PersonalDetailsAggregateSchema = z.object({
  orderBy: z
    .union([
      PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: PersonalDetailsWhereInputObjectSchema.optional(),
  cursor: PersonalDetailsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PersonalDetailsCountAggregateInputObjectSchema])
    .optional(),
  _min: PersonalDetailsMinAggregateInputObjectSchema.optional(),
  _max: PersonalDetailsMaxAggregateInputObjectSchema.optional(),
  _avg: PersonalDetailsAvgAggregateInputObjectSchema.optional(),
  _sum: PersonalDetailsSumAggregateInputObjectSchema.optional(),
});
