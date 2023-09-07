import { z } from 'zod';
import { ArenaCreateWithoutSectionImageInputObjectSchema } from './ArenaCreateWithoutSectionImageInput.schema';
import { ArenaUncheckedCreateWithoutSectionImageInputObjectSchema } from './ArenaUncheckedCreateWithoutSectionImageInput.schema';
import { ArenaCreateOrConnectWithoutSectionImageInputObjectSchema } from './ArenaCreateOrConnectWithoutSectionImageInput.schema';
import { ArenaCreateManySectionImageInputEnvelopeObjectSchema } from './ArenaCreateManySectionImageInputEnvelope.schema';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateNestedManyWithoutSectionImageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArenaCreateWithoutSectionImageInputObjectSchema),
          z.lazy(() => ArenaCreateWithoutSectionImageInputObjectSchema).array(),
          z.lazy(
            () => ArenaUncheckedCreateWithoutSectionImageInputObjectSchema,
          ),
          z
            .lazy(
              () => ArenaUncheckedCreateWithoutSectionImageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ArenaCreateOrConnectWithoutSectionImageInputObjectSchema,
          ),
          z
            .lazy(
              () => ArenaCreateOrConnectWithoutSectionImageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ArenaCreateManySectionImageInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArenaWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArenaCreateNestedManyWithoutSectionImageInputObjectSchema = Schema;
