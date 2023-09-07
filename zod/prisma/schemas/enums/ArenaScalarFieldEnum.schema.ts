import { z } from 'zod';

export const ArenaScalarFieldEnumSchema = z.enum([
  'id',
  'uniqueKey',
  'name',
  'arenaAmenitiesId',
  'locationId',
  'sectionImageId',
]);
