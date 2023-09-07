import { z } from 'zod';

export const ImageScalarFieldEnumSchema = z.enum([
  'id',
  'publicUrl',
  'createdAt',
  'updatedAt',
]);
