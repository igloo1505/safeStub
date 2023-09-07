import { z } from 'zod';
import { ColorsWhereInputObjectSchema } from './objects/ColorsWhereInput.schema';

export const ColorsDeleteManySchema = z.object({
  where: ColorsWhereInputObjectSchema.optional(),
});
