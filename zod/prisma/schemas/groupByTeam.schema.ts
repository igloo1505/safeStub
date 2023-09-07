import { z } from 'zod';
import { TeamWhereInputObjectSchema } from './objects/TeamWhereInput.schema';
import { TeamOrderByWithAggregationInputObjectSchema } from './objects/TeamOrderByWithAggregationInput.schema';
import { TeamScalarWhereWithAggregatesInputObjectSchema } from './objects/TeamScalarWhereWithAggregatesInput.schema';
import { TeamScalarFieldEnumSchema } from './enums/TeamScalarFieldEnum.schema';

export const TeamGroupBySchema = z.object({
  where: TeamWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TeamOrderByWithAggregationInputObjectSchema,
      TeamOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TeamScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TeamScalarFieldEnumSchema),
});
