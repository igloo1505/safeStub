import { z } from 'zod';
import { CATEGORYSchema } from '../enums/CATEGORY.schema';
import { TicketUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutEventInput.schema';
import { TicketGroupUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './TicketGroupUncheckedCreateNestedManyWithoutEventInput.schema';
import { TagUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutEventInput.schema';
import { TeamUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './TeamUncheckedCreateNestedManyWithoutEventInput.schema';
import { ExternalTicketDataUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './ExternalTicketDataUncheckedCreateNestedManyWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUncheckedCreateWithoutAmenitiesInput> = z
  .object({
    id: z.number().optional(),
    category: z.lazy(() => CATEGORYSchema),
    arenaId: z.number(),
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
    participants: z
      .lazy(() => TeamUncheckedCreateNestedManyWithoutEventInputObjectSchema)
      .optional(),
    cxternalTicketSource: z
      .lazy(
        () =>
          ExternalTicketDataUncheckedCreateNestedManyWithoutEventInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const EventUncheckedCreateWithoutAmenitiesInputObjectSchema = Schema;
