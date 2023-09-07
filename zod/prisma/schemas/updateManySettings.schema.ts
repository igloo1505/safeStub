import { z } from 'zod';
import { SettingsUpdateManyMutationInputObjectSchema } from './objects/SettingsUpdateManyMutationInput.schema';
import { SettingsWhereInputObjectSchema } from './objects/SettingsWhereInput.schema';

export const SettingsUpdateManySchema = z.object({
  data: SettingsUpdateManyMutationInputObjectSchema,
  where: SettingsWhereInputObjectSchema.optional(),
});
