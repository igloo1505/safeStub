import { z } from 'zod';

export const FaqScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'subtitle',
  'body',
  'category',
  'createdAt',
  'updatedAt',
  'priority',
]);
