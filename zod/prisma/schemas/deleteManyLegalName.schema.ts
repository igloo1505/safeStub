import { z } from 'zod';
import { LegalNameWhereInputObjectSchema } from './objects/LegalNameWhereInput.schema';

export const LegalNameDeleteManySchema = z.object({
  where: LegalNameWhereInputObjectSchema.optional(),
});
