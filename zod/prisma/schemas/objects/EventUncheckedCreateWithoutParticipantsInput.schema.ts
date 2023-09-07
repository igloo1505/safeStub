import { z } from 'zod';
import { CATEGORYSchema } from '../enums/CATEGORY.schema';
import { TicketUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutEventInput.schema';
import { TicketGroupUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './TicketGroupUncheckedCreateNestedManyWithoutEventInput.schema';
import { TagUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUncheckedCreateWithoutParticipantsInput> = z
  .object({
    id: z.number().optional(),
    category: z.lazy(() => CATEGORYSchema),
    arenaId: z.number(),
    amenitiesId: z.number(),
    date: z.coerce.date(),
    title: z.string(),
    description: z.string(),
    tickets: z
      .lazy(() => TicketUncheckedCreateNestedManyWithoutEventInputObjectSchema)
      .optional(),
    ticketGroups: z
      .lazy(
        () => TicketGroupUncheckedCreateNestedManyWithoutEventInputObjectSchema,
      )
      .optional(),
    tags: z
      .lazy(() => TagUncheckedCreateNestedManyWithoutEventInputObjectSchema)
      .optional(),
  })
  .strict();

export const EventUncheckedCreateWithoutParticipantsInputObjectSchema = Schema;
