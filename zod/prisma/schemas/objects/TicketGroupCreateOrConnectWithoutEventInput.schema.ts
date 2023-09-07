import { z } from 'zod';
import { TicketGroupWhereUniqueInputObjectSchema } from './TicketGroupWhereUniqueInput.schema';
import { TicketGroupCreateWithoutEventInputObjectSchema } from './TicketGroupCreateWithoutEventInput.schema';
import { TicketGroupUncheckedCreateWithoutEventInputObjectSchema } from './TicketGroupUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateOrConnectWithoutEventInput> = z
  .object({
    where: z.lazy(() => TicketGroupWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TicketGroupCreateWithoutEventInputObjectSchema),
      z.lazy(() => TicketGroupUncheckedCreateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const TicketGroupCreateOrConnectWithoutEventInputObjectSchema = Schema;
