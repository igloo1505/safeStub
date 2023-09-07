import { z } from 'zod';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketCreateWithoutArenaSectionInputObjectSchema } from './TicketCreateWithoutArenaSectionInput.schema';
import { TicketUncheckedCreateWithoutArenaSectionInputObjectSchema } from './TicketUncheckedCreateWithoutArenaSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateOrConnectWithoutArenaSectionInput> =
  z
    .object({
      where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TicketCreateWithoutArenaSectionInputObjectSchema),
        z.lazy(() => TicketUncheckedCreateWithoutArenaSectionInputObjectSchema),
      ]),
    })
    .strict();

export const TicketCreateOrConnectWithoutArenaSectionInputObjectSchema = Schema;
