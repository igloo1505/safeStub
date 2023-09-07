import { z } from 'zod';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketCreateWithoutEventInputObjectSchema } from './TicketCreateWithoutEventInput.schema';
import { TicketUncheckedCreateWithoutEventInputObjectSchema } from './TicketUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateOrConnectWithoutEventInput> = z
  .object({
    where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TicketCreateWithoutEventInputObjectSchema),
      z.lazy(() => TicketUncheckedCreateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const TicketCreateOrConnectWithoutEventInputObjectSchema = Schema;
