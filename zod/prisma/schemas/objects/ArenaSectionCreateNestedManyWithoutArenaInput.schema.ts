import { z } from 'zod';
import { ArenaSectionCreateWithoutArenaInputObjectSchema } from './ArenaSectionCreateWithoutArenaInput.schema';
import { ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema } from './ArenaSectionUncheckedCreateWithoutArenaInput.schema';
import { ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema } from './ArenaSectionCreateOrConnectWithoutArenaInput.schema';
import { ArenaSectionCreateManyArenaInputEnvelopeObjectSchema } from './ArenaSectionCreateManyArenaInputEnvelope.schema';
import { ArenaSectionWhereUniqueInputObjectSchema } from './ArenaSectionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCreateNestedManyWithoutArenaInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArenaSectionCreateWithoutArenaInputObjectSchema),
          z.lazy(() => ArenaSectionCreateWithoutArenaInputObjectSchema).array(),
          z.lazy(
            () => ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema,
          ),
          z
            .lazy(
              () => ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema,
          ),
          z
            .lazy(
              () => ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ArenaSectionCreateManyArenaInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArenaSectionCreateNestedManyWithoutArenaInputObjectSchema = Schema;
