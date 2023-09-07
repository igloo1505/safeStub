import { z } from 'zod';
import { ArenaCreateWithoutLocationInputObjectSchema } from './ArenaCreateWithoutLocationInput.schema';
import { ArenaUncheckedCreateWithoutLocationInputObjectSchema } from './ArenaUncheckedCreateWithoutLocationInput.schema';
import { ArenaCreateOrConnectWithoutLocationInputObjectSchema } from './ArenaCreateOrConnectWithoutLocationInput.schema';
import { ArenaCreateManyLocationInputEnvelopeObjectSchema } from './ArenaCreateManyLocationInputEnvelope.schema';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUncheckedCreateNestedManyWithoutLocationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArenaCreateWithoutLocationInputObjectSchema),
          z.lazy(() => ArenaCreateWithoutLocationInputObjectSchema).array(),
          z.lazy(() => ArenaUncheckedCreateWithoutLocationInputObjectSchema),
          z
            .lazy(() => ArenaUncheckedCreateWithoutLocationInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ArenaCreateOrConnectWithoutLocationInputObjectSchema),
          z
            .lazy(() => ArenaCreateOrConnectWithoutLocationInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ArenaCreateManyLocationInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArenaWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArenaUncheckedCreateNestedManyWithoutLocationInputObjectSchema =
  Schema;
