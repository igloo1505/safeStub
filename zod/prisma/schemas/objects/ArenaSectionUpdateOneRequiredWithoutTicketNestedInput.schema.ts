import { z } from 'zod';
import { ArenaSectionCreateWithoutTicketInputObjectSchema } from './ArenaSectionCreateWithoutTicketInput.schema';
import { ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema } from './ArenaSectionUncheckedCreateWithoutTicketInput.schema';
import { ArenaSectionCreateOrConnectWithoutTicketInputObjectSchema } from './ArenaSectionCreateOrConnectWithoutTicketInput.schema';
import { ArenaSectionUpsertWithoutTicketInputObjectSchema } from './ArenaSectionUpsertWithoutTicketInput.schema';
import { ArenaSectionWhereUniqueInputObjectSchema } from './ArenaSectionWhereUniqueInput.schema';
import { ArenaSectionUpdateWithoutTicketInputObjectSchema } from './ArenaSectionUpdateWithoutTicketInput.schema';
import { ArenaSectionUncheckedUpdateWithoutTicketInputObjectSchema } from './ArenaSectionUncheckedUpdateWithoutTicketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUpdateOneRequiredWithoutTicketNestedInput> =
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
      upsert: z
        .lazy(() => ArenaSectionUpsertWithoutTicketInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => ArenaSectionWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => ArenaSectionUpdateWithoutTicketInputObjectSchema),
          z.lazy(
            () => ArenaSectionUncheckedUpdateWithoutTicketInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ArenaSectionUpdateOneRequiredWithoutTicketNestedInputObjectSchema =
  Schema;
