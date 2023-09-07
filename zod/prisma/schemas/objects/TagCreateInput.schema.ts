import { z } from 'zod';
import { EventCreateNestedManyWithoutTagsInputObjectSchema } from './EventCreateNestedManyWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateInput> = z
  .object({
    value: z.string(),
    Event: z
      .lazy(() => EventCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagCreateInputObjectSchema = Schema;
