import { z } from 'zod';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './PurchaseHistoryWhereUniqueInput.schema';
import { PurchaseHistoryCreateWithoutBoughtInputObjectSchema } from './PurchaseHistoryCreateWithoutBoughtInput.schema';
import { PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema } from './PurchaseHistoryUncheckedCreateWithoutBoughtInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryCreateOrConnectWithoutBoughtInput> =
  z
    .object({
      where: z.lazy(() => PurchaseHistoryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PurchaseHistoryCreateWithoutBoughtInputObjectSchema),
        z.lazy(
          () => PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PurchaseHistoryCreateOrConnectWithoutBoughtInputObjectSchema =
  Schema;
