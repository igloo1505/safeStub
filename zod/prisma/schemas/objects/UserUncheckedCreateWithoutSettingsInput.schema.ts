import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { PurchaseHistoryUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './PurchaseHistoryUncheckedCreateNestedOneWithoutUserInput.schema';
import { PersonalDetailsUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './PersonalDetailsUncheckedCreateNestedOneWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutSettingsInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    password: z.string(),
    role: z.lazy(() => ROLESchema).optional(),
    createdAt: z.coerce.date().optional(),
    paymentAccountDetailsId: z.number().optional().nullable(),
    IdVerified: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
    emailVerified: z.coerce.date().optional().nullable(),
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
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutSettingsInputObjectSchema = Schema;
