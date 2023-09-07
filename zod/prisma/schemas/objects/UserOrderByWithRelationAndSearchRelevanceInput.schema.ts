import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInput.schema';
import { PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './PurchaseHistoryOrderByWithRelationAndSearchRelevanceInput.schema';
import { PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './PersonalDetailsOrderByWithRelationAndSearchRelevanceInput.schema';
import { SettingsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './SettingsOrderByWithRelationAndSearchRelevanceInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { UserOrderByRelevanceInputObjectSchema } from './UserOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      paymentAccountDetailsId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      IdVerified: z.lazy(() => SortOrderSchema).optional(),
      emailVerified: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      paymentAccount: z
        .lazy(
          () =>
            PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      purchaseHistory: z
        .lazy(
          () =>
            PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      personalDetails: z
        .lazy(
          () =>
            PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      settings: z
        .lazy(
          () => SettingsOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      accounts: z
        .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
        .optional(),
      _relevance: z
        .lazy(() => UserOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const UserOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
