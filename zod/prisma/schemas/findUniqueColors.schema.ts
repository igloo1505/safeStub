import { z } from 'zod';
import { ColorsSelectObjectSchema } from './objects/ColorsSelect.schema';
import { ColorsIncludeObjectSchema } from './objects/ColorsInclude.schema';
import { ColorsWhereUniqueInputObjectSchema } from './objects/ColorsWhereUniqueInput.schema';

export const ColorsFindUniqueSchema = z.object({
  select: ColorsSelectObjectSchema.optional(),
  include: ColorsIncludeObjectSchema.optional(),
  where: ColorsWhereUniqueInputObjectSchema,
});
