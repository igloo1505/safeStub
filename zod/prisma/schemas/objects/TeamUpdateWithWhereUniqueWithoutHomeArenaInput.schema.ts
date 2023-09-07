import { z } from 'zod';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateWithoutHomeArenaInputObjectSchema } from './TeamUpdateWithoutHomeArenaInput.schema';
import { TeamUncheckedUpdateWithoutHomeArenaInputObjectSchema } from './TeamUncheckedUpdateWithoutHomeArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUpdateWithWhereUniqueWithoutHomeArenaInput> =
  z
    .object({
      where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TeamUpdateWithoutHomeArenaInputObjectSchema),
        z.lazy(() => TeamUncheckedUpdateWithoutHomeArenaInputObjectSchema),
      ]),
    })
    .strict();

export const TeamUpdateWithWhereUniqueWithoutHomeArenaInputObjectSchema =
  Schema;
