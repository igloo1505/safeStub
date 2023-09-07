import { z } from 'zod';
import { LogoWhereUniqueInputObjectSchema } from './LogoWhereUniqueInput.schema';
import { LogoUpdateWithoutTeamInputObjectSchema } from './LogoUpdateWithoutTeamInput.schema';
import { LogoUncheckedUpdateWithoutTeamInputObjectSchema } from './LogoUncheckedUpdateWithoutTeamInput.schema';
import { LogoCreateWithoutTeamInputObjectSchema } from './LogoCreateWithoutTeamInput.schema';
import { LogoUncheckedCreateWithoutTeamInputObjectSchema } from './LogoUncheckedCreateWithoutTeamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoUpsertWithWhereUniqueWithoutTeamInput> = z
  .object({
    where: z.lazy(() => LogoWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => LogoUpdateWithoutTeamInputObjectSchema),
      z.lazy(() => LogoUncheckedUpdateWithoutTeamInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LogoCreateWithoutTeamInputObjectSchema),
      z.lazy(() => LogoUncheckedCreateWithoutTeamInputObjectSchema),
    ]),
  })
  .strict();

export const LogoUpsertWithWhereUniqueWithoutTeamInputObjectSchema = Schema;
