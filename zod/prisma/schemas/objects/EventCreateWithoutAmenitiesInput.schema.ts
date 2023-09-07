import { z } from 'zod';
import { CATEGORYSchema } from '../enums/CATEGORY.schema';
import { ArenaCreateNestedOneWithoutEventsInputObjectSchema } from './ArenaCreateNestedOneWithoutEventsInput.schema';
import { TicketCreateNestedManyWithoutEventInputObjectSchema } from './TicketCreateNestedManyWithoutEventInput.schema';
import { TicketGroupCreateNestedManyWithoutEventInputObjectSchema } from './TicketGroupCreateNestedManyWithoutEventInput.schema';
import { TagCreateNestedManyWithoutEventInputObjectSchema } from './TagCreateNestedManyWithoutEventInput.schema';
import { TeamCreateNestedManyWithoutEventInputObjectSchema } from './TeamCreateNestedManyWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateWithoutAmenitiesInput> = z
  .object({
    category: z.lazy(() => CATEGORYSchema),
    date: z.coerce.date(),
    title: z.string(),
    description: z.string(),
    arena: z.lazy(() => ArenaCreateNestedOneWithoutEventsInputObjectSchema),
    tickets: z
      .lazy(() => TicketCreateNestedManyWithoutEventInputObjectSchema)
      .optional(),
    ticketGroups: z
      .lazy(() => TicketGroupCreateNestedManyWithoutEventInputObjectSchema)
      .optional(),
    tags: z
      .lazy(() => TagCreateNestedManyWithoutEventInputObjectSchema)
      .optional(),
    participants: z
      .lazy(() => TeamCreateNestedManyWithoutEventInputObjectSchema)
      .optional(),
  })
  .strict();

export const EventCreateWithoutAmenitiesInputObjectSchema = Schema;
