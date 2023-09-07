import { z } from 'zod';

export const LogoOrderByRelevanceFieldEnumSchema = z.enum([
  'path',
  'rel',
  'url',
]);
