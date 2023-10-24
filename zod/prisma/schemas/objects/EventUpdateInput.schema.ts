import { z } from 'zod';
import { CATEGORYSchema } from '../enums/CATEGORY.schema';
import { EnumCATEGORYFieldUpdateOperationsInputObjectSchema } from './EnumCATEGORYFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ArenaUpdateOneRequiredWithoutEventsNestedInputObjectSchema } from './ArenaUpdateOneRequiredWithoutEventsNestedInput.schema';
import { TicketUpdateManyWithoutEventNestedInputObjectSchema } from './TicketUpdateManyWithoutEventNestedInput.schema';
import { TicketGroupUpdateManyWithoutEventNestedInputObjectSchema } from './TicketGroupUpdateManyWithoutEventNestedInput.schema';
import { ArenaAmenitiesUpdateOneRequiredWithoutEventNestedInputObjectSchema } from './ArenaAmenitiesUpdateOneRequiredWithoutEventNestedInput.schema';
import { TagUpdateManyWithoutEventNestedInputObjectSchema } from './TagUpdateManyWithoutEventNestedInput.schema';
import { TeamUpdateManyWithoutEventNestedInputObjectSchema } from './TeamUpdateManyWithoutEventNestedInput.schema';
import { ExternalTicketDataUpdateManyWithoutEventNestedInputObjectSchema } from './ExternalTicketDataUpdateManyWithoutEventNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpdateInput> = z
  .object({
    category: z
      .union([
        z.lazy(() => CATEGORYSchema),
        z.lazy(() => EnumCATEGORYFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    date: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    arena: z
      .lazy(() => ArenaUpdateOneRequiredWithoutEventsNestedInputObjectSchema)
      .optional(),
    tickets: z
      .lazy(() => TicketUpdateManyWithoutEventNestedInputObjectSchema)
      .optional(),
    ticketGroups: z
      .lazy(() => TicketGroupUpdateManyWithoutEventNestedInputObjectSchema)
      .optional(),
    amenities: z
      .lazy(
        () =>
          ArenaAmenitiesUpdateOneRequiredWithoutEventNestedInputObjectSchema,
      )
      .optional(),
    tags: z
      .lazy(() => TagUpdateManyWithoutEventNestedInputObjectSchema)
      .optional(),
    participants: z
      .lazy(() => TeamUpdateManyWithoutEventNestedInputObjectSchema)
      .optional(),
    cxternalTicketSource: z
      .lazy(
        () => ExternalTicketDataUpdateManyWithoutEventNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const EventUpdateInputObjectSchema = Schema;
