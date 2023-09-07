import { z } from 'zod';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutArenaSectionInputObjectSchema } from './TicketUpdateWithoutArenaSectionInput.schema';
import { TicketUncheckedUpdateWithoutArenaSectionInputObjectSchema } from './TicketUncheckedUpdateWithoutArenaSectionInput.schema';
import { TicketCreateWithoutArenaSectionInputObjectSchema } from './TicketCreateWithoutArenaSectionInput.schema';
import { TicketUncheckedCreateWithoutArenaSectionInputObjectSchema } from './TicketUncheckedCreateWithoutArenaSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutArenaSectionInput> =
  z
    .object({
      where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TicketUpdateWithoutArenaSectionInputObjectSchema),
        z.lazy(() => TicketUncheckedUpdateWithoutArenaSectionInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TicketCreateWithoutArenaSectionInputObjectSchema),
        z.lazy(() => TicketUncheckedCreateWithoutArenaSectionInputObjectSchema),
      ]),
    })
    .strict();

export const TicketUpsertWithWhereUniqueWithoutArenaSectionInputObjectSchema =
  Schema;
