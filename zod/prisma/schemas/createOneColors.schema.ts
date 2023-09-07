import { z } from 'zod';
import { ColorsSelectObjectSchema } from './objects/ColorsSelect.schema';
import { ColorsIncludeObjectSchema } from './objects/ColorsInclude.schema';
import { ColorsCreateInputObjectSchema } from './objects/ColorsCreateInput.schema';
import { ColorsUncheckedCreateInputObjectSchema } from './objects/ColorsUncheckedCreateInput.schema';

export const ColorsCreateOneSchema = z.object({
  select: ColorsSelectObjectSchema.optional(),
  include: ColorsIncludeObjectSchema.optional(),
  data: z.union([
    ColorsCreateInputObjectSchema,
    ColorsUncheckedCreateInputObjectSchema,
  ]),
});
