import { z } from 'zod';
import { LogoWhereUniqueInputObjectSchema } from './LogoWhereUniqueInput.schema';
import { LogoUpdateWithoutTeamInputObjectSchema } from './LogoUpdateWithoutTeamInput.schema';
import { LogoUncheckedUpdateWithoutTeamInputObjectSchema } from './LogoUncheckedUpdateWithoutTeamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoUpdateWithWhereUniqueWithoutTeamInput> = z
  .object({
    where: z.lazy(() => LogoWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => LogoUpdateWithoutTeamInputObjectSchema),
      z.lazy(() => LogoUncheckedUpdateWithoutTeamInputObjectSchema),
    ]),
  })
  .strict();

export const LogoUpdateWithWhereUniqueWithoutTeamInputObjectSchema = Schema;
