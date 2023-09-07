import { z } from 'zod';
import { LogoUpdateManyMutationInputObjectSchema } from './objects/LogoUpdateManyMutationInput.schema';
import { LogoWhereInputObjectSchema } from './objects/LogoWhereInput.schema';

export const LogoUpdateManySchema = z.object({
  data: LogoUpdateManyMutationInputObjectSchema,
  where: LogoWhereInputObjectSchema.optional(),
});
