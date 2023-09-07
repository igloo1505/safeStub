import { z } from 'zod';

export const LocationScalarFieldEnumSchema = z.enum([
  'id',
  'uniqueKey',
  'street',
  'zip',
  'city',
  'cityId',
  'state',
  'lat',
  'long',
  'country',
  'userId',
]);
