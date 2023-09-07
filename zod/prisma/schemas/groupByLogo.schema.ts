import { z } from 'zod';
import { LogoWhereInputObjectSchema } from './objects/LogoWhereInput.schema';
import { LogoOrderByWithAggregationInputObjectSchema } from './objects/LogoOrderByWithAggregationInput.schema';
import { LogoScalarWhereWithAggregatesInputObjectSchema } from './objects/LogoScalarWhereWithAggregatesInput.schema';
import { LogoScalarFieldEnumSchema } from './enums/LogoScalarFieldEnum.schema';

export const LogoGroupBySchema = z.object({
  where: LogoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      LogoOrderByWithAggregationInputObjectSchema,
      LogoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: LogoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(LogoScalarFieldEnumSchema),
});
