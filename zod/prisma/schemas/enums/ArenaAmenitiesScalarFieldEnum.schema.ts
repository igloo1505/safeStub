import { z } from 'zod';

export const ArenaAmenitiesScalarFieldEnumSchema = z.enum([
  'id',
  'indoor',
  'covered',
  'outdoor',
  'food',
  'alcohol',
  'parking',
  'shuttleAvailable',
]);
