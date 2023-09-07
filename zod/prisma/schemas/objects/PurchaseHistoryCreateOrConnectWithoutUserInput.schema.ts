import { z } from 'zod';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './PurchaseHistoryWhereUniqueInput.schema';
import { PurchaseHistoryCreateWithoutUserInputObjectSchema } from './PurchaseHistoryCreateWithoutUserInput.schema';
import { PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema } from './PurchaseHistoryUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PurchaseHistoryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PurchaseHistoryCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PurchaseHistoryCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
