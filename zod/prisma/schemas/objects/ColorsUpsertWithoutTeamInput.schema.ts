import { z } from 'zod';
import { ColorsUpdateWithoutTeamInputObjectSchema } from './ColorsUpdateWithoutTeamInput.schema';
import { ColorsUncheckedUpdateWithoutTeamInputObjectSchema } from './ColorsUncheckedUpdateWithoutTeamInput.schema';
import { ColorsCreateWithoutTeamInputObjectSchema } from './ColorsCreateWithoutTeamInput.schema';
import { ColorsUncheckedCreateWithoutTeamInputObjectSchema } from './ColorsUncheckedCreateWithoutTeamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsUpsertWithoutTeamInput> = z
  .object({
    update: z.union([
      z.lazy(() => ColorsUpdateWithoutTeamInputObjectSchema),
      z.lazy(() => ColorsUncheckedUpdateWithoutTeamInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ColorsCreateWithoutTeamInputObjectSchema),
      z.lazy(() => ColorsUncheckedCreateWithoutTeamInputObjectSchema),
    ]),
  })
  .strict();

export const ColorsUpsertWithoutTeamInputObjectSchema = Schema;
