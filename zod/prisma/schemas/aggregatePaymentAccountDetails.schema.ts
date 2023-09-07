import { z } from 'zod';
import { PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInput.schema';
import { PaymentAccountDetailsWhereInputObjectSchema } from './objects/PaymentAccountDetailsWhereInput.schema';
import { PaymentAccountDetailsWhereUniqueInputObjectSchema } from './objects/PaymentAccountDetailsWhereUniqueInput.schema';
import { PaymentAccountDetailsCountAggregateInputObjectSchema } from './objects/PaymentAccountDetailsCountAggregateInput.schema';
import { PaymentAccountDetailsMinAggregateInputObjectSchema } from './objects/PaymentAccountDetailsMinAggregateInput.schema';
import { PaymentAccountDetailsMaxAggregateInputObjectSchema } from './objects/PaymentAccountDetailsMaxAggregateInput.schema';
import { PaymentAccountDetailsAvgAggregateInputObjectSchema } from './objects/PaymentAccountDetailsAvgAggregateInput.schema';
import { PaymentAccountDetailsSumAggregateInputObjectSchema } from './objects/PaymentAccountDetailsSumAggregateInput.schema';

export const PaymentAccountDetailsAggregateSchema = z.object({
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
  _count: z
    .union([
      z.literal(true),
      PaymentAccountDetailsCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: PaymentAccountDetailsMinAggregateInputObjectSchema.optional(),
  _max: PaymentAccountDetailsMaxAggregateInputObjectSchema.optional(),
  _avg: PaymentAccountDetailsAvgAggregateInputObjectSchema.optional(),
  _sum: PaymentAccountDetailsSumAggregateInputObjectSchema.optional(),
});
