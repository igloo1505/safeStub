import { z } from 'zod';
import { PurchaseHistoryUpdateWithoutSoldInputObjectSchema } from './PurchaseHistoryUpdateWithoutSoldInput.schema';
import { PurchaseHistoryUncheckedUpdateWithoutSoldInputObjectSchema } from './PurchaseHistoryUncheckedUpdateWithoutSoldInput.schema';
import { PurchaseHistoryCreateWithoutSoldInputObjectSchema } from './PurchaseHistoryCreateWithoutSoldInput.schema';
import { PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema } from './PurchaseHistoryUncheckedCreateWithoutSoldInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUpsertWithoutSoldInput> = z
  .object({
    update: z.union([
      z.lazy(() => PurchaseHistoryUpdateWithoutSoldInputObjectSchema),
      z.lazy(() => PurchaseHistoryUncheckedUpdateWithoutSoldInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PurchaseHistoryCreateWithoutSoldInputObjectSchema),
      z.lazy(() => PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema),
    ]),
  })
  .strict();

export const PurchaseHistoryUpsertWithoutSoldInputObjectSchema = Schema;
