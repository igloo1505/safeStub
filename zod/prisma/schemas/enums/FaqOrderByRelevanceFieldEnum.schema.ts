import { z } from 'zod';

export const FaqOrderByRelevanceFieldEnumSchema = z.enum([
  'title',
  'subtitle',
  'body',
]);
