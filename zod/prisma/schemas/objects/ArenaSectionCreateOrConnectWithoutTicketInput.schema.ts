import { z } from 'zod';
import { ArenaSectionWhereUniqueInputObjectSchema } from './ArenaSectionWhereUniqueInput.schema';
import { ArenaSectionCreateWithoutTicketInputObjectSchema } from './ArenaSectionCreateWithoutTicketInput.schema';
import { ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema } from './ArenaSectionUncheckedCreateWithoutTicketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCreateOrConnectWithoutTicketInput> =
  z
    .object({
      where: z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ArenaSectionCreateWithoutTicketInputObjectSchema),
        z.lazy(() => ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema),
      ]),
    })
    .strict();

export const ArenaSectionCreateOrConnectWithoutTicketInputObjectSchema = Schema;
