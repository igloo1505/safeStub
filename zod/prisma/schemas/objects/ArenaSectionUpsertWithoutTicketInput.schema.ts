import { z } from 'zod';
import { ArenaSectionUpdateWithoutTicketInputObjectSchema } from './ArenaSectionUpdateWithoutTicketInput.schema';
import { ArenaSectionUncheckedUpdateWithoutTicketInputObjectSchema } from './ArenaSectionUncheckedUpdateWithoutTicketInput.schema';
import { ArenaSectionCreateWithoutTicketInputObjectSchema } from './ArenaSectionCreateWithoutTicketInput.schema';
import { ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema } from './ArenaSectionUncheckedCreateWithoutTicketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUpsertWithoutTicketInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArenaSectionUpdateWithoutTicketInputObjectSchema),
      z.lazy(() => ArenaSectionUncheckedUpdateWithoutTicketInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArenaSectionCreateWithoutTicketInputObjectSchema),
      z.lazy(() => ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema),
    ]),
  })
  .strict();

export const ArenaSectionUpsertWithoutTicketInputObjectSchema = Schema;
