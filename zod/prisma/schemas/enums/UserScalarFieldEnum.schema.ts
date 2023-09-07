import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'password',
  'role',
  'createdAt',
  'paymentAccountDetailsId',
  'IdVerified',
  'emailVerified',
]);
