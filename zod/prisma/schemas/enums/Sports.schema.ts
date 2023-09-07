import { z } from 'zod';

export const SportsSchema = z.enum([
  'Basketball',
  'Football',
  'Soccer',
  'MMA',
  'Motorsports',
]);
