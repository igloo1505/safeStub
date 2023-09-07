import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutEventInputObjectSchema } from './TagUpdateWithoutEventInput.schema';
import { TagUncheckedUpdateWithoutEventInputObjectSchema } from './TagUncheckedUpdateWithoutEventInput.schema';
import { TagCreateWithoutEventInputObjectSchema } from './TagCreateWithoutEventInput.schema';
import { TagUncheckedCreateWithoutEventInputObjectSchema } from './TagUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutEventInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TagUpdateWithoutEventInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutEventInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutEventInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpsertWithWhereUniqueWithoutEventInputObjectSchema = Schema;
