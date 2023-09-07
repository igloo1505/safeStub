import { z } from 'zod';
import { PaymentAccountDetailsUpdateManyMutationInputObjectSchema } from './objects/PaymentAccountDetailsUpdateManyMutationInput.schema';
import { PaymentAccountDetailsWhereInputObjectSchema } from './objects/PaymentAccountDetailsWhereInput.schema';

export const PaymentAccountDetailsUpdateManySchema = z.object({
  data: PaymentAccountDetailsUpdateManyMutationInputObjectSchema,
  where: PaymentAccountDetailsWhereInputObjectSchema.optional(),
});
