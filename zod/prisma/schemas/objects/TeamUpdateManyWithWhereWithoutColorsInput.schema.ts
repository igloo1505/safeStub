import { z } from 'zod';
import { TeamScalarWhereInputObjectSchema } from './TeamScalarWhereInput.schema';
import { TeamUpdateManyMutationInputObjectSchema } from './TeamUpdateManyMutationInput.schema';
import { TeamUncheckedUpdateManyWithoutTeamInputObjectSchema } from './TeamUncheckedUpdateManyWithoutTeamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUpdateManyWithWhereWithoutColorsInput> = z
  .object({
    where: z.lazy(() => TeamScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TeamUpdateManyMutationInputObjectSchema),
      z.lazy(() => TeamUncheckedUpdateManyWithoutTeamInputObjectSchema),
    ]),
  })
  .strict();

export const TeamUpdateManyWithWhereWithoutColorsInputObjectSchema = Schema;
