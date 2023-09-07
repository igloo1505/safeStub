import { z } from 'zod';
import { CATEGORYSchema } from '../enums/CATEGORY.schema';
import { ArenaCreateNestedOneWithoutEventsInputObjectSchema } from './ArenaCreateNestedOneWithoutEventsInput.schema';
import { TicketCreateNestedManyWithoutEventInputObjectSchema } from './TicketCreateNestedManyWithoutEventInput.schema';
import { ArenaAmenitiesCreateNestedOneWithoutEventInputObjectSchema } from './ArenaAmenitiesCreateNestedOneWithoutEventInput.schema';
import { TagCreateNestedManyWithoutEventInputObjectSchema } from './TagCreateNestedManyWithoutEventInput.schema';
import { TeamCreateNestedManyWithoutEventInputObjectSchema } from './TeamCreateNestedManyWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateWithoutTicketGroupsInput> = z
  .object({
    category: z.lazy(() => CATEGORYSchema),
    date: z.coerce.date(),
    title: z.string(),
    description: z.string(),
    arena: z.lazy(() => ArenaCreateNestedOneWithoutEventsInputObjectSchema),
    tickets: z
      .lazy(() => TicketCreateNestedManyWithoutEventInputObjectSchema)
      .optional(),
    amenities: z.lazy(
      () => ArenaAmenitiesCreateNestedOneWithoutEventInputObjectSchema,
    ),
    tags: z
      .lazy(() => TagCreateNestedManyWithoutEventInputObjectSchema)
      .optional(),
    participants: z
      .lazy(() => TeamCreateNestedManyWithoutEventInputObjectSchema)
      .optional(),
  })
  .strict();

export const EventCreateWithoutTicketGroupsInputObjectSchema = Schema;
