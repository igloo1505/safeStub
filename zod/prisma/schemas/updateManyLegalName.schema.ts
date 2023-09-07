import { z } from 'zod';
import { LegalNameUpdateManyMutationInputObjectSchema } from './objects/LegalNameUpdateManyMutationInput.schema';
import { LegalNameWhereInputObjectSchema } from './objects/LegalNameWhereInput.schema';

export const LegalNameUpdateManySchema = z.object({
  data: LegalNameUpdateManyMutationInputObjectSchema,
  where: LegalNameWhereInputObjectSchema.optional(),
});
