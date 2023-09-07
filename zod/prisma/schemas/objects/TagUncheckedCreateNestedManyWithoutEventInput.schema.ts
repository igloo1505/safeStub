import { z } from 'zod';
import { TagCreateWithoutEventInputObjectSchema } from './TagCreateWithoutEventInput.schema';
import { TagUncheckedCreateWithoutEventInputObjectSchema } from './TagUncheckedCreateWithoutEventInput.schema';
import { TagCreateOrConnectWithoutEventInputObjectSchema } from './TagCreateOrConnectWithoutEventInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutEventInput> =
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
      connect: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TagUncheckedCreateNestedManyWithoutEventInputObjectSchema = Schema;
