import { z } from 'zod';

export const UserOrderByRelevanceFieldEnumSchema = z.enum([
  'email',
  'password',
]);
