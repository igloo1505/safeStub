import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ROLESchema } from '../enums/ROLE.schema';
import { EnumROLEFieldUpdateOperationsInputObjectSchema } from './EnumROLEFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema } from './EnumVERIFICATIONSTATUSFieldUpdateOperationsInput.schema';
import { PurchaseHistoryUpdateOneWithoutUserNestedInputObjectSchema } from './PurchaseHistoryUpdateOneWithoutUserNestedInput.schema';
import { PersonalDetailsUpdateOneWithoutUserNestedInputObjectSchema } from './PersonalDetailsUpdateOneWithoutUserNestedInput.schema';
import { SettingsUpdateOneWithoutUserNestedInputObjectSchema } from './SettingsUpdateOneWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithoutPaymentAccountInput> = z
  .object({
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
      .lazy(() => PurchaseHistoryUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    personalDetails: z
      .lazy(() => PersonalDetailsUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    settings: z
      .lazy(() => SettingsUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateWithoutPaymentAccountInputObjectSchema = Schema;
