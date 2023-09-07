import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { PurchaseHistoryUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './PurchaseHistoryUncheckedCreateNestedOneWithoutUserInput.schema';
import { SettingsUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './SettingsUncheckedCreateNestedOneWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutPaymentAccountInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string().optional().nullable(),
      role: z.lazy(() => ROLESchema).optional(),
      createdAt: z.coerce.date().optional(),
      email: z.string().optional().nullable(),
      emailVerified: z.coerce.date().optional().nullable(),
      image: z.string().optional().nullable(),
      idVerified: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
      purchaseHistory: z
        .lazy(
          () =>
            PurchaseHistoryUncheckedCreateNestedOneWithoutUserInputObjectSchema,
        )
        .optional(),
      settings: z
        .lazy(
          () => SettingsUncheckedCreateNestedOneWithoutUserInputObjectSchema,
        )
        .optional(),
      accounts: z
        .lazy(
          () => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      sessions: z
        .lazy(
          () => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutPaymentAccountInputObjectSchema = Schema;
