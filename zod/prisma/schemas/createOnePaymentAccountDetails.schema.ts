import { z } from 'zod';
import { PaymentAccountDetailsSelectObjectSchema } from './objects/PaymentAccountDetailsSelect.schema';
import { PaymentAccountDetailsIncludeObjectSchema } from './objects/PaymentAccountDetailsInclude.schema';
import { PaymentAccountDetailsCreateInputObjectSchema } from './objects/PaymentAccountDetailsCreateInput.schema';
import { PaymentAccountDetailsUncheckedCreateInputObjectSchema } from './objects/PaymentAccountDetailsUncheckedCreateInput.schema';

export const PaymentAccountDetailsCreateOneSchema = z.object({
  select: PaymentAccountDetailsSelectObjectSchema.optional(),
  include: PaymentAccountDetailsIncludeObjectSchema.optional(),
  data: z.union([
    PaymentAccountDetailsCreateInputObjectSchema,
    PaymentAccountDetailsUncheckedCreateInputObjectSchema,
  ]),
});
