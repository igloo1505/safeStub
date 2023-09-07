import { z } from 'zod';
import { TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema';
import { TicketUpdateManyMutationInputObjectSchema } from './TicketUpdateManyMutationInput.schema';
import { TicketUncheckedUpdateManyWithoutTicketInputObjectSchema } from './TicketUncheckedUpdateManyWithoutTicketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateManyWithWhereWithoutArenaSectionInput> =
  z
    .object({
      where: z.lazy(() => TicketScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TicketUpdateManyMutationInputObjectSchema),
        z.lazy(() => TicketUncheckedUpdateManyWithoutTicketInputObjectSchema),
      ]),
    })
    .strict();

export const TicketUpdateManyWithWhereWithoutArenaSectionInputObjectSchema =
  Schema;
