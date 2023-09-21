import { z } from 'zod';
import { TicketCreateNestedManyWithoutTicketGroupInputObjectSchema } from './TicketCreateNestedManyWithoutTicketGroupInput.schema';
import { UserCreateNestedOneWithoutTicketGroupsSoldInputObjectSchema } from './UserCreateNestedOneWithoutTicketGroupsSoldInput.schema';
import { UserCreateNestedOneWithoutTicketGroupsPurchasedInputObjectSchema } from './UserCreateNestedOneWithoutTicketGroupsPurchasedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateWithoutEventInput> = z
  .object({
    confirmationId: z.string(),
    tickets: z
      .lazy(() => TicketCreateNestedManyWithoutTicketGroupInputObjectSchema)
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

export const TicketGroupCreateWithoutEventInputObjectSchema = Schema;
