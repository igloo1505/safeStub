import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ROLESchema } from '../enums/ROLE.schema';
import { EnumROLEFieldUpdateOperationsInputObjectSchema } from './EnumROLEFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema } from './EnumVERIFICATIONSTATUSFieldUpdateOperationsInput.schema';
import { SettingsUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './SettingsUncheckedUpdateOneWithoutUserNestedInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPurchaseHistoryInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
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
      email: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      image: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      paymentAccountDetailsId: z
        .union([
          z.number(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      idVerified: z
        .union([
          z.lazy(() => VERIFICATIONSTATUSSchema),
          z.lazy(
            () => EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema,
          ),
        ])
        .optional(),
      settings: z
        .lazy(
          () => SettingsUncheckedUpdateOneWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      accounts: z
        .lazy(
          () => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      sessions: z
        .lazy(
          () => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutPurchaseHistoryInputObjectSchema =
  Schema;
