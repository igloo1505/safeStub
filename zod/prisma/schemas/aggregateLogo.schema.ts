import { z } from 'zod';
import { LogoOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/LogoOrderByWithRelationAndSearchRelevanceInput.schema';
import { LogoWhereInputObjectSchema } from './objects/LogoWhereInput.schema';
import { LogoWhereUniqueInputObjectSchema } from './objects/LogoWhereUniqueInput.schema';
import { LogoCountAggregateInputObjectSchema } from './objects/LogoCountAggregateInput.schema';
import { LogoMinAggregateInputObjectSchema } from './objects/LogoMinAggregateInput.schema';
import { LogoMaxAggregateInputObjectSchema } from './objects/LogoMaxAggregateInput.schema';
import { LogoAvgAggregateInputObjectSchema } from './objects/LogoAvgAggregateInput.schema';
import { LogoSumAggregateInputObjectSchema } from './objects/LogoSumAggregateInput.schema';

export const LogoAggregateSchema = z.object({
  orderBy: z
    .union([
      LogoOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      LogoOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: LogoWhereInputObjectSchema.optional(),
  cursor: LogoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), LogoCountAggregateInputObjectSchema])
    .optional(),
  _min: LogoMinAggregateInputObjectSchema.optional(),
  _max: LogoMaxAggregateInputObjectSchema.optional(),
  _avg: LogoAvgAggregateInputObjectSchema.optional(),
  _sum: LogoSumAggregateInputObjectSchema.optional(),
});
