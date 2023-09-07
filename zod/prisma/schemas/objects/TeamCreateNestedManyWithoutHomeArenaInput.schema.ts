import { z } from 'zod';
import { TeamCreateWithoutHomeArenaInputObjectSchema } from './TeamCreateWithoutHomeArenaInput.schema';
import { TeamUncheckedCreateWithoutHomeArenaInputObjectSchema } from './TeamUncheckedCreateWithoutHomeArenaInput.schema';
import { TeamCreateOrConnectWithoutHomeArenaInputObjectSchema } from './TeamCreateOrConnectWithoutHomeArenaInput.schema';
import { TeamCreateManyHomeArenaInputEnvelopeObjectSchema } from './TeamCreateManyHomeArenaInputEnvelope.schema';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCreateNestedManyWithoutHomeArenaInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TeamCreateWithoutHomeArenaInputObjectSchema),
        z.lazy(() => TeamCreateWithoutHomeArenaInputObjectSchema).array(),
        z.lazy(() => TeamUncheckedCreateWithoutHomeArenaInputObjectSchema),
        z
          .lazy(() => TeamUncheckedCreateWithoutHomeArenaInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TeamCreateOrConnectWithoutHomeArenaInputObjectSchema),
        z
          .lazy(() => TeamCreateOrConnectWithoutHomeArenaInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TeamCreateManyHomeArenaInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TeamWhereUniqueInputObjectSchema),
        z.lazy(() => TeamWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TeamCreateNestedManyWithoutHomeArenaInputObjectSchema = Schema;
