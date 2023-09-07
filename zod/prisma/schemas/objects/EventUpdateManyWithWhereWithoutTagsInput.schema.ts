import { z } from 'zod';
import { EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema';
import { EventUpdateManyMutationInputObjectSchema } from './EventUpdateManyMutationInput.schema';
import { EventUncheckedUpdateManyWithoutEventInputObjectSchema } from './EventUncheckedUpdateManyWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpdateManyWithWhereWithoutTagsInput> = z
  .object({
    where: z.lazy(() => EventScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => EventUpdateManyMutationInputObjectSchema),
      z.lazy(() => EventUncheckedUpdateManyWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const EventUpdateManyWithWhereWithoutTagsInputObjectSchema = Schema;
