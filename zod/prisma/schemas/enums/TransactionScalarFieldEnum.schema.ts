import { z } from 'zod';

export const TransactionScalarFieldEnumSchema = z.enum([
  'id',
  'listedPrice',
  'sellerId',
  'buyerId',
  'status',
  'total',
  'payout',
  'payoutMethod',
  'postedOn',
  'purchasedOn',
]);
