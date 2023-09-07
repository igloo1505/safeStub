import { z } from 'zod';

export const LegalNameOrderByRelevanceFieldEnumSchema = z.enum([
  'first',
  'middle',
  'last',
]);
