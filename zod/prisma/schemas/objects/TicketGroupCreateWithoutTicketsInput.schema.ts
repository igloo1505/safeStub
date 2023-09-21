import { z } from 'zod';
import { EventCreateNestedOneWithoutTicketGroupsInputObjectSchema } from './EventCreateNestedOneWithoutTicketGroupsInput.schema';
import { UserCreateNestedOneWithoutTicketGroupsSoldInputObjectSchema } from './UserCreateNestedOneWithoutTicketGroupsSoldInput.schema';
import { UserCreateNestedOneWithoutTicketGroupsPurchasedInputObjectSchema } from './UserCreateNestedOneWithoutTicketGroupsPurchasedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateWithoutTicketsInput> = z
  .object({
    confirmationId: z.string(),
    Event: z
      .lazy(() => EventCreateNestedOneWithoutTicketGroupsInputObjectSchema)
      .optional(),
    seller: z.lazy(
      () => UserCreateNestedOneWithoutTicketGroupsSoldInputObjectSchema,
    ),
    buyer: z
      .lazy(
        () => UserCreateNestedOneWithoutTicketGroupsPurchasedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TicketGroupCreateWithoutTicketsInputObjectSchema = Schema;
