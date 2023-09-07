import { z } from 'zod';

export const TeamOrderByRelevanceFieldEnumSchema = z.enum([
  'uniqueKey',
  'abbreviation',
  'displayName',
  'displayName_short',
  'nickname',
]);
