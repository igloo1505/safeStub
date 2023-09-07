import { z } from 'zod';
import { PaymentAccountDetailsCreateManyInputObjectSchema } from './objects/PaymentAccountDetailsCreateManyInput.schema';

export const PaymentAccountDetailsCreateManySchema = z.object({
  data: z.union([
    PaymentAccountDetailsCreateManyInputObjectSchema,
    z.array(PaymentAccountDetailsCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
