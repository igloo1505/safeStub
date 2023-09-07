import { z } from 'zod';

export const LogoScalarFieldEnumSchema = z.enum([
  'id',
  'path',
  'width',
  'height',
  'rel',
  'url',
  'teamId',
]);
