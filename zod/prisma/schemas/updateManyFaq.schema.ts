import { z } from 'zod';
import { FaqUpdateManyMutationInputObjectSchema } from './objects/FaqUpdateManyMutationInput.schema';
import { FaqWhereInputObjectSchema } from './objects/FaqWhereInput.schema';

export const FaqUpdateManySchema = z.object({
  data: FaqUpdateManyMutationInputObjectSchema,
  where: FaqWhereInputObjectSchema.optional(),
});
