import { z } from 'zod';
import { LogoCreateWithoutTeamInputObjectSchema } from './LogoCreateWithoutTeamInput.schema';
import { LogoUncheckedCreateWithoutTeamInputObjectSchema } from './LogoUncheckedCreateWithoutTeamInput.schema';
import { LogoCreateOrConnectWithoutTeamInputObjectSchema } from './LogoCreateOrConnectWithoutTeamInput.schema';
import { LogoCreateManyTeamInputEnvelopeObjectSchema } from './LogoCreateManyTeamInputEnvelope.schema';
import { LogoWhereUniqueInputObjectSchema } from './LogoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoCreateNestedManyWithoutTeamInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LogoCreateWithoutTeamInputObjectSchema),
        z.lazy(() => LogoCreateWithoutTeamInputObjectSchema).array(),
        z.lazy(() => LogoUncheckedCreateWithoutTeamInputObjectSchema),
        z.lazy(() => LogoUncheckedCreateWithoutTeamInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => LogoCreateOrConnectWithoutTeamInputObjectSchema),
        z.lazy(() => LogoCreateOrConnectWithoutTeamInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => LogoCreateManyTeamInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => LogoWhereUniqueInputObjectSchema),
        z.lazy(() => LogoWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const LogoCreateNestedManyWithoutTeamInputObjectSchema = Schema;
