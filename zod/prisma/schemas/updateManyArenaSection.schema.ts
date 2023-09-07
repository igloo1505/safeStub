import { z } from 'zod';
import { ArenaSectionUpdateManyMutationInputObjectSchema } from './objects/ArenaSectionUpdateManyMutationInput.schema';
import { ArenaSectionWhereInputObjectSchema } from './objects/ArenaSectionWhereInput.schema';

export const ArenaSectionUpdateManySchema = z.object({
  data: ArenaSectionUpdateManyMutationInputObjectSchema,
  where: ArenaSectionWhereInputObjectSchema.optional(),
});
