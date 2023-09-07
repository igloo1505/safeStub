import { z } from 'zod';
import { ColorsUpdateManyMutationInputObjectSchema } from './objects/ColorsUpdateManyMutationInput.schema';
import { ColorsWhereInputObjectSchema } from './objects/ColorsWhereInput.schema';

export const ColorsUpdateManySchema = z.object({
  data: ColorsUpdateManyMutationInputObjectSchema,
  where: ColorsWhereInputObjectSchema.optional(),
});
