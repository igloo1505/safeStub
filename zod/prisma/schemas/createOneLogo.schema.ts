import { z } from 'zod';
import { LogoSelectObjectSchema } from './objects/LogoSelect.schema';
import { LogoIncludeObjectSchema } from './objects/LogoInclude.schema';
import { LogoCreateInputObjectSchema } from './objects/LogoCreateInput.schema';
import { LogoUncheckedCreateInputObjectSchema } from './objects/LogoUncheckedCreateInput.schema';

export const LogoCreateOneSchema = z.object({
  select: LogoSelectObjectSchema.optional(),
  include: LogoIncludeObjectSchema.optional(),
  data: z.union([
    LogoCreateInputObjectSchema,
    LogoUncheckedCreateInputObjectSchema,
  ]),
});
