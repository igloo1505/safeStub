import { z } from 'zod';
import { PaymentAccountDetailsSelectObjectSchema } from './objects/PaymentAccountDetailsSelect.schema';
import { PaymentAccountDetailsIncludeObjectSchema } from './objects/PaymentAccountDetailsInclude.schema';
import { PaymentAccountDetailsWhereUniqueInputObjectSchema } from './objects/PaymentAccountDetailsWhereUniqueInput.schema';

export const PaymentAccountDetailsDeleteOneSchema = z.object({
  select: PaymentAccountDetailsSelectObjectSchema.optional(),
  include: PaymentAccountDetailsIncludeObjectSchema.optional(),
  where: PaymentAccountDetailsWhereUniqueInputObjectSchema,
});
