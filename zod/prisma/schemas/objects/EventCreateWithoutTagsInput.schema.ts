import { z } from 'zod';
import { CATEGORYSchema } from '../enums/CATEGORY.schema';
import { ArenaCreateNestedOneWithoutEventsInputObjectSchema } from './ArenaCreateNestedOneWithoutEventsInput.schema';
import { TicketCreateNestedManyWithoutEventInputObjectSchema } from './TicketCreateNestedManyWithoutEventInput.schema';
import { TicketGroupCreateNestedManyWithoutEventInputObjectSchema } from './TicketGroupCreateNestedManyWithoutEventInput.schema';
import { ArenaAmenitiesCreateNestedOneWithoutEventInputObjectSchema } from './ArenaAmenitiesCreateNestedOneWithoutEventInput.schema';
import { TeamCreateNestedManyWithoutEventInputObjectSchema } from './TeamCreateNestedManyWithoutEventInput.schema';
import { ExternalTicketDataCreateNestedManyWithoutEventInputObjectSchema } from './ExternalTicketDataCreateNestedManyWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateWithoutTagsInput> = z
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
    amenities: z.lazy(
      () => ArenaAmenitiesCreateNestedOneWithoutEventInputObjectSchema,
    ),
    participants: z
      .lazy(() => TeamCreateNestedManyWithoutEventInputObjectSchema)
      .optional(),
    cxternalTicketSource: z
      .lazy(
        () => ExternalTicketDataCreateNestedManyWithoutEventInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const EventCreateWithoutTagsInputObjectSchema = Schema;
