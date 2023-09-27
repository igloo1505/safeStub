import { z } from 'zod';

export const PaymentAccountDetailsScalarFieldEnumSchema = z.enum([
  'id',
  'nameOnAccount',
  'paymentMethodType',
]);
