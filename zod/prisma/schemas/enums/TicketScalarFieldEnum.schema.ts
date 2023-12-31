import { z } from 'zod';

export const TicketScalarFieldEnumSchema = z.enum([
  'id',
  'eventId',
  'ticketGroupId',
  'section',
  'row',
  'seat',
  'sellerId',
  'buyerId',
  'transactionId',
  'ticketNumber',
  'status',
]);
