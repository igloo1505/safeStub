import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { PurchaseHistoryUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './PurchaseHistoryUncheckedCreateNestedOneWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { TicketUncheckedCreateNestedManyWithoutBuyerInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutBuyerInput.schema';
import { TicketUncheckedCreateNestedManyWithoutSellerInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutSellerInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutSettingsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    role: z.lazy(() => ROLESchema).optional(),
    createdAt: z.coerce.date().optional(),
    email: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    phone: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    paymentAccountDetailsId: z.number().optional().nullable(),
    idVerified: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
    gcmSubscription: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    purchaseHistory: z
      .lazy(
        () =>
          PurchaseHistoryUncheckedCreateNestedOneWithoutUserInputObjectSchema,
      )
      .optional(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    ticketsPurchased: z
      .lazy(() => TicketUncheckedCreateNestedManyWithoutBuyerInputObjectSchema)
      .optional(),
    ticketsSold: z
      .lazy(() => TicketUncheckedCreateNestedManyWithoutSellerInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutSettingsInputObjectSchema = Schema;
