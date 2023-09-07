import { z } from 'zod';
import { TicketGroupWhereUniqueInputObjectSchema } from './TicketGroupWhereUniqueInput.schema';
import { TicketGroupUpdateWithoutEventInputObjectSchema } from './TicketGroupUpdateWithoutEventInput.schema';
import { TicketGroupUncheckedUpdateWithoutEventInputObjectSchema } from './TicketGroupUncheckedUpdateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpdateWithWhereUniqueWithoutEventInput> =
  z
    .object({
      where: z.lazy(() => TicketGroupWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TicketGroupUpdateWithoutEventInputObjectSchema),
        z.lazy(() => TicketGroupUncheckedUpdateWithoutEventInputObjectSchema),
      ]),
    })
    .strict();

export const TicketGroupUpdateWithWhereUniqueWithoutEventInputObjectSchema =
  Schema;
