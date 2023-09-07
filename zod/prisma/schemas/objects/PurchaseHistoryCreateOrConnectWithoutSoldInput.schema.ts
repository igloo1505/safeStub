import { z } from 'zod';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './PurchaseHistoryWhereUniqueInput.schema';
import { PurchaseHistoryCreateWithoutSoldInputObjectSchema } from './PurchaseHistoryCreateWithoutSoldInput.schema';
import { PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema } from './PurchaseHistoryUncheckedCreateWithoutSoldInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryCreateOrConnectWithoutSoldInput> =
  z
    .object({
      where: z.lazy(() => PurchaseHistoryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PurchaseHistoryCreateWithoutSoldInputObjectSchema),
        z.lazy(
          () => PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PurchaseHistoryCreateOrConnectWithoutSoldInputObjectSchema =
  Schema;
