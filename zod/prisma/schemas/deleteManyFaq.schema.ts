import { z } from 'zod';
import { FaqWhereInputObjectSchema } from './objects/FaqWhereInput.schema';

export const FaqDeleteManySchema = z.object({
  where: FaqWhereInputObjectSchema.optional(),
});
