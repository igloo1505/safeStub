import { z } from 'zod';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamCreateWithoutHomeArenaInputObjectSchema } from './TeamCreateWithoutHomeArenaInput.schema';
import { TeamUncheckedCreateWithoutHomeArenaInputObjectSchema } from './TeamUncheckedCreateWithoutHomeArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCreateOrConnectWithoutHomeArenaInput> = z
  .object({
    where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TeamCreateWithoutHomeArenaInputObjectSchema),
      z.lazy(() => TeamUncheckedCreateWithoutHomeArenaInputObjectSchema),
    ]),
  })
  .strict();

export const TeamCreateOrConnectWithoutHomeArenaInputObjectSchema = Schema;
