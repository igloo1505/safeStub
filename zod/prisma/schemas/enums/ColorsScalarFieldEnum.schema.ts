import { z } from 'zod';

export const ColorsScalarFieldEnumSchema = z.enum([
  'id',
  'primary',
  'secondary',
]);
