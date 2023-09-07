import { z } from 'zod';
import { PaymentAccountDetailsWhereInputObjectSchema } from './objects/PaymentAccountDetailsWhereInput.schema';
import { PaymentAccountDetailsOrderByWithAggregationInputObjectSchema } from './objects/PaymentAccountDetailsOrderByWithAggregationInput.schema';
import { PaymentAccountDetailsScalarWhereWithAggregatesInputObjectSchema } from './objects/PaymentAccountDetailsScalarWhereWithAggregatesInput.schema';
import { PaymentAccountDetailsScalarFieldEnumSchema } from './enums/PaymentAccountDetailsScalarFieldEnum.schema';

export const PaymentAccountDetailsGroupBySchema = z.object({
  where: PaymentAccountDetailsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PaymentAccountDetailsOrderByWithAggregationInputObjectSchema,
      PaymentAccountDetailsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    PaymentAccountDetailsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PaymentAccountDetailsScalarFieldEnumSchema),
});
