import { z } from 'zod';
import { PaymentAccountDetailsSelectObjectSchema } from './objects/PaymentAccountDetailsSelect.schema';
import { PaymentAccountDetailsIncludeObjectSchema } from './objects/PaymentAccountDetailsInclude.schema';
import { PaymentAccountDetailsWhereUniqueInputObjectSchema } from './objects/PaymentAccountDetailsWhereUniqueInput.schema';
import { PaymentAccountDetailsCreateInputObjectSchema } from './objects/PaymentAccountDetailsCreateInput.schema';
import { PaymentAccountDetailsUncheckedCreateInputObjectSchema } from './objects/PaymentAccountDetailsUncheckedCreateInput.schema';
import { PaymentAccountDetailsUpdateInputObjectSchema } from './objects/PaymentAccountDetailsUpdateInput.schema';
import { PaymentAccountDetailsUncheckedUpdateInputObjectSchema } from './objects/PaymentAccountDetailsUncheckedUpdateInput.schema';

export const PaymentAccountDetailsUpsertSchema = z.object({
  select: PaymentAccountDetailsSelectObjectSchema.optional(),
  include: PaymentAccountDetailsIncludeObjectSchema.optional(),
  where: PaymentAccountDetailsWhereUniqueInputObjectSchema,
  create: z.union([
    PaymentAccountDetailsCreateInputObjectSchema,
    PaymentAccountDetailsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PaymentAccountDetailsUpdateInputObjectSchema,
    PaymentAccountDetailsUncheckedUpdateInputObjectSchema,
  ]),
});
