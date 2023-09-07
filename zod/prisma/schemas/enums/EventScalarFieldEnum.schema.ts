import { z } from 'zod';

export const EventScalarFieldEnumSchema = z.enum([
  'id',
  'category',
  'arenaId',
  'amenitiesId',
  'date',
  'title',
  'description',
]);
