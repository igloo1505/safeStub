import { z } from 'zod';
import { LogoSelectObjectSchema } from './objects/LogoSelect.schema';
import { LogoIncludeObjectSchema } from './objects/LogoInclude.schema';
import { LogoWhereUniqueInputObjectSchema } from './objects/LogoWhereUniqueInput.schema';
import { LogoCreateInputObjectSchema } from './objects/LogoCreateInput.schema';
import { LogoUncheckedCreateInputObjectSchema } from './objects/LogoUncheckedCreateInput.schema';
import { LogoUpdateInputObjectSchema } from './objects/LogoUpdateInput.schema';
import { LogoUncheckedUpdateInputObjectSchema } from './objects/LogoUncheckedUpdateInput.schema';

export const LogoUpsertSchema = z.object({
  select: LogoSelectObjectSchema.optional(),
  include: LogoIncludeObjectSchema.optional(),
  where: LogoWhereUniqueInputObjectSchema,
  create: z.union([
    LogoCreateInputObjectSchema,
    LogoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    LogoUpdateInputObjectSchema,
    LogoUncheckedUpdateInputObjectSchema,
  ]),
});
