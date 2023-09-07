import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutPaymentAccountNestedInputObjectSchema } from './UserUpdateManyWithoutPaymentAccountNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsUpdateInput> = z
  .object({
    nameOnAccount: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    User: z
      .lazy(() => UserUpdateManyWithoutPaymentAccountNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PaymentAccountDetailsUpdateInputObjectSchema = Schema;
