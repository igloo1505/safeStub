import { z } from 'zod';
import { LogoSelectObjectSchema } from './objects/LogoSelect.schema';
import { LogoIncludeObjectSchema } from './objects/LogoInclude.schema';
import { LogoWhereUniqueInputObjectSchema } from './objects/LogoWhereUniqueInput.schema';

export const LogoDeleteOneSchema = z.object({
  select: LogoSelectObjectSchema.optional(),
  include: LogoIncludeObjectSchema.optional(),
  where: LogoWhereUniqueInputObjectSchema,
});
