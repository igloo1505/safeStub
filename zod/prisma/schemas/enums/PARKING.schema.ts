import { z } from 'zod';

export const PARKINGSchema = z.enum([
  'limited',
  'valet',
  'withTicket',
  'offstreet',
]);
