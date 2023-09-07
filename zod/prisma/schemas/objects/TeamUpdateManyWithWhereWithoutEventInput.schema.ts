import { z } from 'zod';
import { TeamScalarWhereInputObjectSchema } from './TeamScalarWhereInput.schema';
import { TeamUpdateManyMutationInputObjectSchema } from './TeamUpdateManyMutationInput.schema';
import { TeamUncheckedUpdateManyWithoutParticipantsInputObjectSchema } from './TeamUncheckedUpdateManyWithoutParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUpdateManyWithWhereWithoutEventInput> = z
  .object({
    where: z.lazy(() => TeamScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TeamUpdateManyMutationInputObjectSchema),
      z.lazy(() => TeamUncheckedUpdateManyWithoutParticipantsInputObjectSchema),
    ]),
  })
  .strict();

export const TeamUpdateManyWithWhereWithoutEventInputObjectSchema = Schema;
