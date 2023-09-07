import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'role',
  'createdAt',
  'email',
  'emailVerified',
  'image',
  'paymentAccountDetailsId',
  'idVerified',
]);
