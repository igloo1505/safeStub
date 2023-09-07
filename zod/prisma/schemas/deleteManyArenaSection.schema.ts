import { z } from 'zod';
import { ArenaSectionWhereInputObjectSchema } from './objects/ArenaSectionWhereInput.schema';

export const ArenaSectionDeleteManySchema = z.object({
  where: ArenaSectionWhereInputObjectSchema.optional(),
});
