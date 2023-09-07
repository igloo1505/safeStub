import { z } from 'zod';
import { LegalNameSelectObjectSchema } from './objects/LegalNameSelect.schema';
import { LegalNameIncludeObjectSchema } from './objects/LegalNameInclude.schema';
import { LegalNameUpdateInputObjectSchema } from './objects/LegalNameUpdateInput.schema';
import { LegalNameUncheckedUpdateInputObjectSchema } from './objects/LegalNameUncheckedUpdateInput.schema';
import { LegalNameWhereUniqueInputObjectSchema } from './objects/LegalNameWhereUniqueInput.schema';

export const LegalNameUpdateOneSchema = z.object({
  select: LegalNameSelectObjectSchema.optional(),
  include: LegalNameIncludeObjectSchema.optional(),
  data: z.union([
    LegalNameUpdateInputObjectSchema,
    LegalNameUncheckedUpdateInputObjectSchema,
  ]),
  where: LegalNameWhereUniqueInputObjectSchema,
});
