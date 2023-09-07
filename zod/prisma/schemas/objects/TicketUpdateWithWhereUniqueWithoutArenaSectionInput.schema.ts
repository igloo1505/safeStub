import { z } from 'zod';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutArenaSectionInputObjectSchema } from './TicketUpdateWithoutArenaSectionInput.schema';
import { TicketUncheckedUpdateWithoutArenaSectionInputObjectSchema } from './TicketUncheckedUpdateWithoutArenaSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutArenaSectionInput> =
  z
    .object({
      where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TicketUpdateWithoutArenaSectionInputObjectSchema),
        z.lazy(() => TicketUncheckedUpdateWithoutArenaSectionInputObjectSchema),
      ]),
    })
    .strict();

export const TicketUpdateWithWhereUniqueWithoutArenaSectionInputObjectSchema =
  Schema;
