import { z } from 'zod';

export const TeamScalarFieldEnumSchema = z.enum([
  'id',
  'uniqueKey',
  'name',
  'abbreviation',
  'displayName',
  'displayName_short',
  'nickname',
  'league',
  'sport',
  'conference',
  'division',
  'homeArenaId',
  'colorsId',
]);
