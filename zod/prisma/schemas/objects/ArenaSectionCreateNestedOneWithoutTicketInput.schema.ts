import { z } from 'zod';
import { ArenaSectionCreateWithoutTicketInputObjectSchema } from './ArenaSectionCreateWithoutTicketInput.schema';
import { ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema } from './ArenaSectionUncheckedCreateWithoutTicketInput.schema';
import { ArenaSectionCreateOrConnectWithoutTicketInputObjectSchema } from './ArenaSectionCreateOrConnectWithoutTicketInput.schema';
import { ArenaSectionWhereUniqueInputObjectSchema } from './ArenaSectionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCreateNestedOneWithoutTicketInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArenaSectionCreateWithoutTicketInputObjectSchema),
          z.lazy(
            () => ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ArenaSectionCreateOrConnectWithoutTicketInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => ArenaSectionWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ArenaSectionCreateNestedOneWithoutTicketInputObjectSchema = Schema;
