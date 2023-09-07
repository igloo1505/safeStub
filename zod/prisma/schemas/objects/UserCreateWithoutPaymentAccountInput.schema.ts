import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { PurchaseHistoryCreateNestedOneWithoutUserInputObjectSchema } from './PurchaseHistoryCreateNestedOneWithoutUserInput.schema';
import { SettingsCreateNestedOneWithoutUserInputObjectSchema } from './SettingsCreateNestedOneWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutPaymentAccountInput> = z
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
      .lazy(() => PurchaseHistoryCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    settings: z
      .lazy(() => SettingsCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutPaymentAccountInputObjectSchema = Schema;
