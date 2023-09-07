import { z } from 'zod';

export const VERIFICATIONSTATUSSchema = z.enum([
  'Verified',
  'Pending',
  'Unverified',
]);
