import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutEventInputObjectSchema } from './TagUpdateWithoutEventInput.schema';
import { TagUncheckedUpdateWithoutEventInputObjectSchema } from './TagUncheckedUpdateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutEventInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TagUpdateWithoutEventInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpdateWithWhereUniqueWithoutEventInputObjectSchema = Schema;
