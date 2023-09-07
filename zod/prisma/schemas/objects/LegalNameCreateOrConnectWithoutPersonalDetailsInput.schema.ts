import { z } from 'zod';
import { LegalNameWhereUniqueInputObjectSchema } from './LegalNameWhereUniqueInput.schema';
import { LegalNameCreateWithoutPersonalDetailsInputObjectSchema } from './LegalNameCreateWithoutPersonalDetailsInput.schema';
import { LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from './LegalNameUncheckedCreateWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameCreateOrConnectWithoutPersonalDetailsInput> =
  z
    .object({
      where: z.lazy(() => LegalNameWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => LegalNameCreateWithoutPersonalDetailsInputObjectSchema),
        z.lazy(
          () => LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const LegalNameCreateOrConnectWithoutPersonalDetailsInputObjectSchema =
  Schema;
