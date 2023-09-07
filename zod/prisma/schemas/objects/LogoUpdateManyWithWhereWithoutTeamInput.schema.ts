import { z } from 'zod';
import { LogoScalarWhereInputObjectSchema } from './LogoScalarWhereInput.schema';
import { LogoUpdateManyMutationInputObjectSchema } from './LogoUpdateManyMutationInput.schema';
import { LogoUncheckedUpdateManyWithoutLogosInputObjectSchema } from './LogoUncheckedUpdateManyWithoutLogosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoUpdateManyWithWhereWithoutTeamInput> = z
  .object({
    where: z.lazy(() => LogoScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => LogoUpdateManyMutationInputObjectSchema),
      z.lazy(() => LogoUncheckedUpdateManyWithoutLogosInputObjectSchema),
    ]),
  })
  .strict();

export const LogoUpdateManyWithWhereWithoutTeamInputObjectSchema = Schema;
