import { z } from 'zod';

export const SettingsScalarFieldEnumSchema = z.enum([
  'id',
  'darkmode',
  'userId',
]);
