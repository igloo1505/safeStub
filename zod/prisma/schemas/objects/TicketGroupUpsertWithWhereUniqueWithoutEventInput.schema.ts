import { z } from 'zod';
import { TicketGroupWhereUniqueInputObjectSchema } from './TicketGroupWhereUniqueInput.schema';
import { TicketGroupUpdateWithoutEventInputObjectSchema } from './TicketGroupUpdateWithoutEventInput.schema';
import { TicketGroupUncheckedUpdateWithoutEventInputObjectSchema } from './TicketGroupUncheckedUpdateWithoutEventInput.schema';
import { TicketGroupCreateWithoutEventInputObjectSchema } from './TicketGroupCreateWithoutEventInput.schema';
import { TicketGroupUncheckedCreateWithoutEventInputObjectSchema } from './TicketGroupUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpsertWithWhereUniqueWithoutEventInput> =
  z
    .object({
      where: z.lazy(() => TicketGroupWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TicketGroupUpdateWithoutEventInputObjectSchema),
        z.lazy(() => TicketGroupUncheckedUpdateWithoutEventInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TicketGroupCreateWithoutEventInputObjectSchema),
        z.lazy(() => TicketGroupUncheckedCreateWithoutEventInputObjectSchema),
      ]),
    })
    .strict();

export const TicketGroupUpsertWithWhereUniqueWithoutEventInputObjectSchema =
  Schema;
