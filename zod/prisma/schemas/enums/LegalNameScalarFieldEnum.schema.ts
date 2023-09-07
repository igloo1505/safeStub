import { z } from 'zod';

export const LegalNameScalarFieldEnumSchema = z.enum([
  'first',
  'middle',
  'last',
  'detailsId',
]);
