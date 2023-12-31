import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumPAYOUTMETHODSWithAggregatesFilterObjectSchema } from './EnumPAYOUTMETHODSWithAggregatesFilter.schema';
import { PAYOUTMETHODSSchema } from '../enums/PAYOUTMETHODS.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              PaymentAccountDetailsScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PaymentAccountDetailsScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => PaymentAccountDetailsScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              PaymentAccountDetailsScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PaymentAccountDetailsScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      nameOnAccount: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      paymentMethodType: z
        .union([
          z.lazy(() => EnumPAYOUTMETHODSWithAggregatesFilterObjectSchema),
          z.lazy(() => PAYOUTMETHODSSchema),
        ])
        .optional(),
    })
    .strict();

export const PaymentAccountDetailsScalarWhereWithAggregatesInputObjectSchema =
  Schema;
