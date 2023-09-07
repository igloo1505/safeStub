import { z } from 'zod';
import { LogoSelectObjectSchema } from './objects/LogoSelect.schema';
import { LogoIncludeObjectSchema } from './objects/LogoInclude.schema';
import { LogoOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/LogoOrderByWithRelationAndSearchRelevanceInput.schema';
import { LogoWhereInputObjectSchema } from './objects/LogoWhereInput.schema';
import { LogoWhereUniqueInputObjectSchema } from './objects/LogoWhereUniqueInput.schema';
import { LogoScalarFieldEnumSchema } from './enums/LogoScalarFieldEnum.schema';

export const LogoFindFirstSchema = z.object({
  select: LogoSelectObjectSchema.optional(),
  include: LogoIncludeObjectSchema.optional(),
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
  distinct: z.array(LogoScalarFieldEnumSchema).optional(),
});
