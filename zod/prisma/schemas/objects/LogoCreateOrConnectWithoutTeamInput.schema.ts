import { z } from 'zod';
import { LogoWhereUniqueInputObjectSchema } from './LogoWhereUniqueInput.schema';
import { LogoCreateWithoutTeamInputObjectSchema } from './LogoCreateWithoutTeamInput.schema';
import { LogoUncheckedCreateWithoutTeamInputObjectSchema } from './LogoUncheckedCreateWithoutTeamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoCreateOrConnectWithoutTeamInput> = z
  .object({
    where: z.lazy(() => LogoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LogoCreateWithoutTeamInputObjectSchema),
      z.lazy(() => LogoUncheckedCreateWithoutTeamInputObjectSchema),
    ]),
  })
  .strict();

export const LogoCreateOrConnectWithoutTeamInputObjectSchema = Schema;
