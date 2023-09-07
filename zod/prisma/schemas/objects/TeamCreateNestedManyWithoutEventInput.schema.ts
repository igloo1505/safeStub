import { z } from 'zod';
import { TeamCreateWithoutEventInputObjectSchema } from './TeamCreateWithoutEventInput.schema';
import { TeamUncheckedCreateWithoutEventInputObjectSchema } from './TeamUncheckedCreateWithoutEventInput.schema';
import { TeamCreateOrConnectWithoutEventInputObjectSchema } from './TeamCreateOrConnectWithoutEventInput.schema';
import { TeamCreateManyEventInputEnvelopeObjectSchema } from './TeamCreateManyEventInputEnvelope.schema';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCreateNestedManyWithoutEventInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TeamCreateWithoutEventInputObjectSchema),
        z.lazy(() => TeamCreateWithoutEventInputObjectSchema).array(),
        z.lazy(() => TeamUncheckedCreateWithoutEventInputObjectSchema),
        z.lazy(() => TeamUncheckedCreateWithoutEventInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TeamCreateOrConnectWithoutEventInputObjectSchema),
        z.lazy(() => TeamCreateOrConnectWithoutEventInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TeamCreateManyEventInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TeamWhereUniqueInputObjectSchema),
        z.lazy(() => TeamWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TeamCreateNestedManyWithoutEventInputObjectSchema = Schema;
