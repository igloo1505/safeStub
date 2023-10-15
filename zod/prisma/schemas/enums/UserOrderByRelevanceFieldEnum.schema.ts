import { z } from 'zod';

export const UserOrderByRelevanceFieldEnumSchema = z.enum([
  'id',
  'name',
  'firstName',
  'lastName',
  'email',
  'phone',
  'image',
]);
