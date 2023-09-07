import { z } from 'zod';
import { PaymentAccountDetailsSelectObjectSchema } from './objects/PaymentAccountDetailsSelect.schema';
import { PaymentAccountDetailsIncludeObjectSchema } from './objects/PaymentAccountDetailsInclude.schema';
import { PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInput.schema';
import { PaymentAccountDetailsWhereInputObjectSchema } from './objects/PaymentAccountDetailsWhereInput.schema';
import { PaymentAccountDetailsWhereUniqueInputObjectSchema } from './objects/PaymentAccountDetailsWhereUniqueInput.schema';
import { PaymentAccountDetailsScalarFieldEnumSchema } from './enums/PaymentAccountDetailsScalarFieldEnum.schema';

export const PaymentAccountDetailsFindFirstSchema = z.object({
  select: PaymentAccountDetailsSelectObjectSchema.optional(),
  include: PaymentAccountDetailsIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: PaymentAccountDetailsWhereInputObjectSchema.optional(),
  cursor: PaymentAccountDetailsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PaymentAccountDetailsScalarFieldEnumSchema).optional(),
});
