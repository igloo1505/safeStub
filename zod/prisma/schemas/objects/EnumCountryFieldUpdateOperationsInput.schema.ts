import { z } from 'zod';
import { CountrySchema } from '../enums/Country.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumCountryFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => CountrySchema).optional(),
  })
  .strict();

export const EnumCountryFieldUpdateOperationsInputObjectSchema = Schema;
