import { z } from 'zod';
import { PurchaseHistoryUpdateWithoutUserInputObjectSchema } from './PurchaseHistoryUpdateWithoutUserInput.schema';
import { PurchaseHistoryUncheckedUpdateWithoutUserInputObjectSchema } from './PurchaseHistoryUncheckedUpdateWithoutUserInput.schema';
import { PurchaseHistoryCreateWithoutUserInputObjectSchema } from './PurchaseHistoryCreateWithoutUserInput.schema';
import { PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema } from './PurchaseHistoryUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => PurchaseHistoryUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PurchaseHistoryUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PurchaseHistoryCreateWithoutUserInputObjectSchema),
      z.lazy(() => PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PurchaseHistoryUpsertWithoutUserInputObjectSchema = Schema;
