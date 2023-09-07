import { z } from 'zod';
import { LogoSelectObjectSchema } from './objects/LogoSelect.schema';
import { LogoIncludeObjectSchema } from './objects/LogoInclude.schema';
import { LogoUpdateInputObjectSchema } from './objects/LogoUpdateInput.schema';
import { LogoUncheckedUpdateInputObjectSchema } from './objects/LogoUncheckedUpdateInput.schema';
import { LogoWhereUniqueInputObjectSchema } from './objects/LogoWhereUniqueInput.schema';

export const LogoUpdateOneSchema = z.object({
  select: LogoSelectObjectSchema.optional(),
  include: LogoIncludeObjectSchema.optional(),
  data: z.union([
    LogoUpdateInputObjectSchema,
    LogoUncheckedUpdateInputObjectSchema,
  ]),
  where: LogoWhereUniqueInputObjectSchema,
});
