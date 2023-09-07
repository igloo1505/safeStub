import { z } from 'zod';
import { ColorsSelectObjectSchema } from './objects/ColorsSelect.schema';
import { ColorsIncludeObjectSchema } from './objects/ColorsInclude.schema';
import { ColorsWhereUniqueInputObjectSchema } from './objects/ColorsWhereUniqueInput.schema';
import { ColorsCreateInputObjectSchema } from './objects/ColorsCreateInput.schema';
import { ColorsUncheckedCreateInputObjectSchema } from './objects/ColorsUncheckedCreateInput.schema';
import { ColorsUpdateInputObjectSchema } from './objects/ColorsUpdateInput.schema';
import { ColorsUncheckedUpdateInputObjectSchema } from './objects/ColorsUncheckedUpdateInput.schema';

export const ColorsUpsertSchema = z.object({
  select: ColorsSelectObjectSchema.optional(),
  include: ColorsIncludeObjectSchema.optional(),
  where: ColorsWhereUniqueInputObjectSchema,
  create: z.union([
    ColorsCreateInputObjectSchema,
    ColorsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ColorsUpdateInputObjectSchema,
    ColorsUncheckedUpdateInputObjectSchema,
  ]),
});
