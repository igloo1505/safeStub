import { z } from 'zod';
import { TeamScalarWhereInputObjectSchema } from './TeamScalarWhereInput.schema';
import { TeamUpdateManyMutationInputObjectSchema } from './TeamUpdateManyMutationInput.schema';
import { TeamUncheckedUpdateManyWithoutHomeTeamsInputObjectSchema } from './TeamUncheckedUpdateManyWithoutHomeTeamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUpdateManyWithWhereWithoutHomeArenaInput> = z
  .object({
    where: z.lazy(() => TeamScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TeamUpdateManyMutationInputObjectSchema),
      z.lazy(() => TeamUncheckedUpdateManyWithoutHomeTeamsInputObjectSchema),
    ]),
  })
  .strict();

export const TeamUpdateManyWithWhereWithoutHomeArenaInputObjectSchema = Schema;
