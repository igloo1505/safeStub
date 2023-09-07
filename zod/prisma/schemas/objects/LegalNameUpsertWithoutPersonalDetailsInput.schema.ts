import { z } from 'zod';
import { LegalNameUpdateWithoutPersonalDetailsInputObjectSchema } from './LegalNameUpdateWithoutPersonalDetailsInput.schema';
import { LegalNameUncheckedUpdateWithoutPersonalDetailsInputObjectSchema } from './LegalNameUncheckedUpdateWithoutPersonalDetailsInput.schema';
import { LegalNameCreateWithoutPersonalDetailsInputObjectSchema } from './LegalNameCreateWithoutPersonalDetailsInput.schema';
import { LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from './LegalNameUncheckedCreateWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameUpsertWithoutPersonalDetailsInput> = z
  .object({
    update: z.union([
      z.lazy(() => LegalNameUpdateWithoutPersonalDetailsInputObjectSchema),
      z.lazy(
        () => LegalNameUncheckedUpdateWithoutPersonalDetailsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => LegalNameCreateWithoutPersonalDetailsInputObjectSchema),
      z.lazy(
        () => LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const LegalNameUpsertWithoutPersonalDetailsInputObjectSchema = Schema;
