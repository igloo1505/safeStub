import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { PurchaseHistoryUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './PurchaseHistoryUncheckedCreateNestedOneWithoutUserInput.schema';
import { PersonalDetailsUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './PersonalDetailsUncheckedCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutSettingsInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    password: z.string(),
    role: z.lazy(() => ROLESchema).optional(),
    createdAt: z.coerce.date().optional(),
    paymentAccountDetailsId: z.number().optional().nullable(),
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
  })
  .strict();

export const UserUncheckedCreateWithoutSettingsInputObjectSchema = Schema;
