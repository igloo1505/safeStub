import { z } from 'zod';
import { SettingsWhereInputObjectSchema } from './objects/SettingsWhereInput.schema';

export const SettingsDeleteManySchema = z.object({
  where: SettingsWhereInputObjectSchema.optional(),
});
