import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'firstName',
  'lastName',
  'role',
  'createdAt',
  'email',
  'emailVerified',
  'phone',
  'image',
  'paymentAccountDetailsId',
  'idVerified',
  'gcmSubscription',
]);
