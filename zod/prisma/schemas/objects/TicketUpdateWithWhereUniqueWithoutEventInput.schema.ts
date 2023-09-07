import { z } from 'zod';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutEventInputObjectSchema } from './TicketUpdateWithoutEventInput.schema';
import { TicketUncheckedUpdateWithoutEventInputObjectSchema } from './TicketUncheckedUpdateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutEventInput> = z
  .object({
    where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TicketUpdateWithoutEventInputObjectSchema),
      z.lazy(() => TicketUncheckedUpdateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const TicketUpdateWithWhereUniqueWithoutEventInputObjectSchema = Schema;
