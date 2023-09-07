import { z } from 'zod';
import { LegalNameSelectObjectSchema } from './objects/LegalNameSelect.schema';
import { LegalNameIncludeObjectSchema } from './objects/LegalNameInclude.schema';
import { LegalNameWhereUniqueInputObjectSchema } from './objects/LegalNameWhereUniqueInput.schema';

export const LegalNameDeleteOneSchema = z.object({
  select: LegalNameSelectObjectSchema.optional(),
  include: LegalNameIncludeObjectSchema.optional(),
  where: LegalNameWhereUniqueInputObjectSchema,
});
