import { z } from 'zod';
import { PurchaseHistoryUpdateWithoutBoughtInputObjectSchema } from './PurchaseHistoryUpdateWithoutBoughtInput.schema';
import { PurchaseHistoryUncheckedUpdateWithoutBoughtInputObjectSchema } from './PurchaseHistoryUncheckedUpdateWithoutBoughtInput.schema';
import { PurchaseHistoryCreateWithoutBoughtInputObjectSchema } from './PurchaseHistoryCreateWithoutBoughtInput.schema';
import { PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema } from './PurchaseHistoryUncheckedCreateWithoutBoughtInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUpsertWithoutBoughtInput> = z
  .object({
    update: z.union([
      z.lazy(() => PurchaseHistoryUpdateWithoutBoughtInputObjectSchema),
      z.lazy(
        () => PurchaseHistoryUncheckedUpdateWithoutBoughtInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => PurchaseHistoryCreateWithoutBoughtInputObjectSchema),
      z.lazy(
        () => PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const PurchaseHistoryUpsertWithoutBoughtInputObjectSchema = Schema;
