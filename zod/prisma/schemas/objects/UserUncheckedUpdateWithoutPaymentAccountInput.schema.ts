import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ROLESchema } from '../enums/ROLE.schema';
import { EnumROLEFieldUpdateOperationsInputObjectSchema } from './EnumROLEFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema } from './EnumVERIFICATIONSTATUSFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { PurchaseHistoryUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './PurchaseHistoryUncheckedUpdateOneWithoutUserNestedInput.schema';
import { SettingsUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './SettingsUncheckedUpdateOneWithoutUserNestedInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPaymentAccountInput> =
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
      idVerified: z
        .union([
          z.lazy(() => VERIFICATIONSTATUSSchema),
          z.lazy(
            () => EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema,
          ),
        ])
        .optional(),
      gcmSubscription: z
        .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
        .optional(),
      purchaseHistory: z
        .lazy(
          () =>
            PurchaseHistoryUncheckedUpdateOneWithoutUserNestedInputObjectSchema,
        )
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

export const UserUncheckedUpdateWithoutPaymentAccountInputObjectSchema = Schema;
