import { z } from 'zod';
import { LegalNameSelectObjectSchema } from './objects/LegalNameSelect.schema';
import { LegalNameIncludeObjectSchema } from './objects/LegalNameInclude.schema';
import { LegalNameCreateInputObjectSchema } from './objects/LegalNameCreateInput.schema';
import { LegalNameUncheckedCreateInputObjectSchema } from './objects/LegalNameUncheckedCreateInput.schema';

export const LegalNameCreateOneSchema = z.object({
  select: LegalNameSelectObjectSchema.optional(),
  include: LegalNameIncludeObjectSchema.optional(),
  data: z.union([
    LegalNameCreateInputObjectSchema,
    LegalNameUncheckedCreateInputObjectSchema,
  ]),
});
