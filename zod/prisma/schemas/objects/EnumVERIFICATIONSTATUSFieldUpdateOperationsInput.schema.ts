import { z } from 'zod';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumVERIFICATIONSTATUSFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
    })
    .strict();

export const EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema =
  Schema;
