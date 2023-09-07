import { z } from 'zod';

export const TransactionScalarFieldEnumSchema = z.enum([
  'id',
  'price',
  'paymentId',
  'sellerId',
  'buyerId',
  'date',
]);
