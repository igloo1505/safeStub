import { z } from 'zod';

export const TicketGroupScalarFieldEnumSchema = z.enum([
  'id',
  'eventId',
  'confirmationId',
]);
