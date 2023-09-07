import { z } from 'zod';

export const TransactionUnboundScalarFieldEnumSchema = z.enum([
  'id',
  'price',
  'paymentId',
  'sellerId',
  'buyerId',
  'date',
]);
