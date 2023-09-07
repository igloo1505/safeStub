import { z } from 'zod';
import { LegalNameSelectObjectSchema } from './objects/LegalNameSelect.schema';
import { LegalNameIncludeObjectSchema } from './objects/LegalNameInclude.schema';
import { LegalNameWhereUniqueInputObjectSchema } from './objects/LegalNameWhereUniqueInput.schema';
import { LegalNameCreateInputObjectSchema } from './objects/LegalNameCreateInput.schema';
import { LegalNameUncheckedCreateInputObjectSchema } from './objects/LegalNameUncheckedCreateInput.schema';
import { LegalNameUpdateInputObjectSchema } from './objects/LegalNameUpdateInput.schema';
import { LegalNameUncheckedUpdateInputObjectSchema } from './objects/LegalNameUncheckedUpdateInput.schema';

export const LegalNameUpsertSchema = z.object({
  select: LegalNameSelectObjectSchema.optional(),
  include: LegalNameIncludeObjectSchema.optional(),
  where: LegalNameWhereUniqueInputObjectSchema,
  create: z.union([
    LegalNameCreateInputObjectSchema,
    LegalNameUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    LegalNameUpdateInputObjectSchema,
    LegalNameUncheckedUpdateInputObjectSchema,
  ]),
});
