import { z } from 'zod';
import { TicketGroupScalarWhereInputObjectSchema } from './TicketGroupScalarWhereInput.schema';
import { TicketGroupUpdateManyMutationInputObjectSchema } from './TicketGroupUpdateManyMutationInput.schema';
import { TicketGroupUncheckedUpdateManyWithoutTicketGroupsInputObjectSchema } from './TicketGroupUncheckedUpdateManyWithoutTicketGroupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpdateManyWithWhereWithoutEventInput> =
  z
    .object({
      where: z.lazy(() => TicketGroupScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TicketGroupUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TicketGroupUncheckedUpdateManyWithoutTicketGroupsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TicketGroupUpdateManyWithWhereWithoutEventInputObjectSchema =
  Schema;
