import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ROLESchema } from '../enums/ROLE.schema';
import { EnumROLEFieldUpdateOperationsInputObjectSchema } from './EnumROLEFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema } from './EnumVERIFICATIONSTATUSFieldUpdateOperationsInput.schema';
import { PurchaseHistoryUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './PurchaseHistoryUncheckedUpdateOneWithoutUserNestedInput.schema';
import { PersonalDetailsUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './PersonalDetailsUncheckedUpdateOneWithoutUserNestedInput.schema';
import { SettingsUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './SettingsUncheckedUpdateOneWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPaymentAccountInput> =
  z
    .object({
      id: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      role: z
        .union([
          z.lazy(() => ROLESchema),
          z.lazy(() => EnumROLEFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      verified: z
        .union([
          z.lazy(() => VERIFICATIONSTATUSSchema),
          z.lazy(
            () => EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema,
          ),
        ])
        .optional(),
      purchaseHistory: z
        .lazy(
          () =>
            PurchaseHistoryUncheckedUpdateOneWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      personalDetails: z
        .lazy(
          () =>
            PersonalDetailsUncheckedUpdateOneWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      settings: z
        .lazy(
          () => SettingsUncheckedUpdateOneWithoutUserNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutPaymentAccountInputObjectSchema = Schema;
