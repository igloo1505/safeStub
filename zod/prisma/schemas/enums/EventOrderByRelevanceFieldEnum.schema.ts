import { z } from 'zod';

export const EventOrderByRelevanceFieldEnumSchema = z.enum([
  'title',
  'description',
]);
