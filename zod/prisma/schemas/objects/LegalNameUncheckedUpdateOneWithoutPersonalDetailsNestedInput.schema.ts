import { z } from 'zod';
import { LegalNameCreateWithoutPersonalDetailsInputObjectSchema } from './LegalNameCreateWithoutPersonalDetailsInput.schema';
import { LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from './LegalNameUncheckedCreateWithoutPersonalDetailsInput.schema';
import { LegalNameCreateOrConnectWithoutPersonalDetailsInputObjectSchema } from './LegalNameCreateOrConnectWithoutPersonalDetailsInput.schema';
import { LegalNameUpsertWithoutPersonalDetailsInputObjectSchema } from './LegalNameUpsertWithoutPersonalDetailsInput.schema';
import { LegalNameWhereUniqueInputObjectSchema } from './LegalNameWhereUniqueInput.schema';
import { LegalNameUpdateWithoutPersonalDetailsInputObjectSchema } from './LegalNameUpdateWithoutPersonalDetailsInput.schema';
import { LegalNameUncheckedUpdateWithoutPersonalDetailsInputObjectSchema } from './LegalNameUncheckedUpdateWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameUncheckedUpdateOneWithoutPersonalDetailsNestedInput> =
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
      upsert: z
        .lazy(() => LegalNameUpsertWithoutPersonalDetailsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => LegalNameWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => LegalNameUpdateWithoutPersonalDetailsInputObjectSchema),
          z.lazy(
            () =>
              LegalNameUncheckedUpdateWithoutPersonalDetailsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const LegalNameUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema =
  Schema;
