import { z } from 'zod';
import { PaymentAccountDetailsWhereInputObjectSchema } from './objects/PaymentAccountDetailsWhereInput.schema';

export const PaymentAccountDetailsDeleteManySchema = z.object({
  where: PaymentAccountDetailsWhereInputObjectSchema.optional(),
});
