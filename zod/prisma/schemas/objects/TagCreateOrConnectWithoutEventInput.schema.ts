import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutEventInputObjectSchema } from './TagCreateWithoutEventInput.schema';
import { TagUncheckedCreateWithoutEventInputObjectSchema } from './TagUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutEventInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagCreateWithoutEventInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const TagCreateOrConnectWithoutEventInputObjectSchema = Schema;
