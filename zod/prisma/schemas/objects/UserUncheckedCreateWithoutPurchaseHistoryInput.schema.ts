import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { PersonalDetailsUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './PersonalDetailsUncheckedCreateNestedOneWithoutUserInput.schema';
import { SettingsUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './SettingsUncheckedCreateNestedOneWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutPurchaseHistoryInput> =
  z
    .object({
      id: z.number().optional(),
      email: z.string(),
      password: z.string(),
      role: z.lazy(() => ROLESchema).optional(),
      createdAt: z.coerce.date().optional(),
      paymentAccountDetailsId: z.number().optional().nullable(),
      IdVerified: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
      emailVerified: z.coerce.date().optional().nullable(),
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

export const UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema =
  Schema;
