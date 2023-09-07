import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutPaymentAccountNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutPaymentAccountNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    nameOnAccount: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    User: z
      .lazy(
        () =>
          UserUncheckedUpdateManyWithoutPaymentAccountNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PaymentAccountDetailsUncheckedUpdateInputObjectSchema = Schema;
