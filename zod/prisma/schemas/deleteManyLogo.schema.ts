import { z } from 'zod';
import { LogoWhereInputObjectSchema } from './objects/LogoWhereInput.schema';

export const LogoDeleteManySchema = z.object({
  where: LogoWhereInputObjectSchema.optional(),
});
