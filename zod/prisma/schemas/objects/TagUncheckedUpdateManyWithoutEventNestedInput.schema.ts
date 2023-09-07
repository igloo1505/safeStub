import { z } from 'zod';
import { TagCreateWithoutEventInputObjectSchema } from './TagCreateWithoutEventInput.schema';
import { TagUncheckedCreateWithoutEventInputObjectSchema } from './TagUncheckedCreateWithoutEventInput.schema';
import { TagCreateOrConnectWithoutEventInputObjectSchema } from './TagCreateOrConnectWithoutEventInput.schema';
import { TagUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './TagUpsertWithWhereUniqueWithoutEventInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './TagUpdateWithWhereUniqueWithoutEventInput.schema';
import { TagUpdateManyWithWhereWithoutEventInputObjectSchema } from './TagUpdateManyWithWhereWithoutEventInput.schema';
import { TagScalarWhereInputObjectSchema } from './TagScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutEventNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagCreateWithoutEventInputObjectSchema),
          z.lazy(() => TagCreateWithoutEventInputObjectSchema).array(),
          z.lazy(() => TagUncheckedCreateWithoutEventInputObjectSchema),
          z.lazy(() => TagUncheckedCreateWithoutEventInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TagCreateOrConnectWithoutEventInputObjectSchema),
          z.lazy(() => TagCreateOrConnectWithoutEventInputObjectSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => TagUpsertWithWhereUniqueWithoutEventInputObjectSchema),
          z
            .lazy(() => TagUpsertWithWhereUniqueWithoutEventInputObjectSchema)
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => TagUpdateWithWhereUniqueWithoutEventInputObjectSchema),
          z
            .lazy(() => TagUpdateWithWhereUniqueWithoutEventInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TagUpdateManyWithWhereWithoutEventInputObjectSchema),
          z
            .lazy(() => TagUpdateManyWithWhereWithoutEventInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TagScalarWhereInputObjectSchema),
          z.lazy(() => TagScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TagUncheckedUpdateManyWithoutEventNestedInputObjectSchema = Schema;
