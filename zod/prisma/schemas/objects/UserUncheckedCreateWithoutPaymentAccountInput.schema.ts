import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { PurchaseHistoryUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './PurchaseHistoryUncheckedCreateNestedOneWithoutUserInput.schema';
import { PersonalDetailsUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './PersonalDetailsUncheckedCreateNestedOneWithoutUserInput.schema';
import { SettingsUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './SettingsUncheckedCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutPaymentAccountInput> =
  z
    .object({
      id: z.number().optional(),
      email: z.string(),
      password: z.string(),
      role: z.lazy(() => ROLESchema).optional(),
      createdAt: z.coerce.date().optional(),
      verified: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
      purchaseHistory: z
        .lazy(
          () =>
            PurchaseHistoryUncheckedCreateNestedOneWithoutUserInputObjectSchema,
        )
        .optional(),
      personalDetails: z
        .lazy(
          () =>
            PersonalDetailsUncheckedCreateNestedOneWithoutUserInputObjectSchema,
        )
        .optional(),
      settings: z
        .lazy(
          () => SettingsUncheckedCreateNestedOneWithoutUserInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutPaymentAccountInputObjectSchema = Schema;
