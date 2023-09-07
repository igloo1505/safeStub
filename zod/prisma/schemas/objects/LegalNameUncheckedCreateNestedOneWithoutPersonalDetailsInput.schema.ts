import { z } from 'zod';
import { LegalNameCreateWithoutPersonalDetailsInputObjectSchema } from './LegalNameCreateWithoutPersonalDetailsInput.schema';
import { LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from './LegalNameUncheckedCreateWithoutPersonalDetailsInput.schema';
import { LegalNameCreateOrConnectWithoutPersonalDetailsInputObjectSchema } from './LegalNameCreateOrConnectWithoutPersonalDetailsInput.schema';
import { LegalNameWhereUniqueInputObjectSchema } from './LegalNameWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LegalNameCreateWithoutPersonalDetailsInputObjectSchema),
          z.lazy(
            () =>
              LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => LegalNameCreateOrConnectWithoutPersonalDetailsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => LegalNameWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema =
  Schema;
