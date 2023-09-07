import { z } from 'zod';
import { EventUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    value: z.string(),
    Event: z
      .lazy(() => EventUncheckedCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUncheckedCreateInputObjectSchema = Schema;
