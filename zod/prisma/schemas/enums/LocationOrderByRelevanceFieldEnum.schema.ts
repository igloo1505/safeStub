import { z } from 'zod';

export const LocationOrderByRelevanceFieldEnumSchema = z.enum([
  'uniqueKey',
  'street',
  'city',
]);
