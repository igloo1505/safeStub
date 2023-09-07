import { z } from 'zod';
import { ArenaCreateWithoutSectionImageInputObjectSchema } from './ArenaCreateWithoutSectionImageInput.schema';
import { ArenaUncheckedCreateWithoutSectionImageInputObjectSchema } from './ArenaUncheckedCreateWithoutSectionImageInput.schema';
import { ArenaCreateOrConnectWithoutSectionImageInputObjectSchema } from './ArenaCreateOrConnectWithoutSectionImageInput.schema';
import { ArenaUpsertWithWhereUniqueWithoutSectionImageInputObjectSchema } from './ArenaUpsertWithWhereUniqueWithoutSectionImageInput.schema';
import { ArenaCreateManySectionImageInputEnvelopeObjectSchema } from './ArenaCreateManySectionImageInputEnvelope.schema';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaUpdateWithWhereUniqueWithoutSectionImageInputObjectSchema } from './ArenaUpdateWithWhereUniqueWithoutSectionImageInput.schema';
import { ArenaUpdateManyWithWhereWithoutSectionImageInputObjectSchema } from './ArenaUpdateManyWithWhereWithoutSectionImageInput.schema';
import { ArenaScalarWhereInputObjectSchema } from './ArenaScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUncheckedUpdateManyWithoutSectionImageNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ArenaUpsertWithWhereUniqueWithoutSectionImageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArenaUpsertWithWhereUniqueWithoutSectionImageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ArenaCreateManySectionImageInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ArenaWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ArenaWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ArenaWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArenaWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ArenaUpdateWithWhereUniqueWithoutSectionImageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArenaUpdateWithWhereUniqueWithoutSectionImageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ArenaUpdateManyWithWhereWithoutSectionImageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArenaUpdateManyWithWhereWithoutSectionImageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ArenaScalarWhereInputObjectSchema),
          z.lazy(() => ArenaScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArenaUncheckedUpdateManyWithoutSectionImageNestedInputObjectSchema =
  Schema;
