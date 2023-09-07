import { z } from 'zod';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutEventInputObjectSchema } from './TicketUpdateWithoutEventInput.schema';
import { TicketUncheckedUpdateWithoutEventInputObjectSchema } from './TicketUncheckedUpdateWithoutEventInput.schema';
import { TicketCreateWithoutEventInputObjectSchema } from './TicketCreateWithoutEventInput.schema';
import { TicketUncheckedCreateWithoutEventInputObjectSchema } from './TicketUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutEventInput> = z
  .object({
    where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TicketUpdateWithoutEventInputObjectSchema),
      z.lazy(() => TicketUncheckedUpdateWithoutEventInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TicketCreateWithoutEventInputObjectSchema),
      z.lazy(() => TicketUncheckedCreateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const TicketUpsertWithWhereUniqueWithoutEventInputObjectSchema = Schema;
