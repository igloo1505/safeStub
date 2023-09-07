import { z } from 'zod';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateWithoutHomeArenaInputObjectSchema } from './TeamUpdateWithoutHomeArenaInput.schema';
import { TeamUncheckedUpdateWithoutHomeArenaInputObjectSchema } from './TeamUncheckedUpdateWithoutHomeArenaInput.schema';
import { TeamCreateWithoutHomeArenaInputObjectSchema } from './TeamCreateWithoutHomeArenaInput.schema';
import { TeamUncheckedCreateWithoutHomeArenaInputObjectSchema } from './TeamUncheckedCreateWithoutHomeArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUpsertWithWhereUniqueWithoutHomeArenaInput> =
  z
    .object({
      where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TeamUpdateWithoutHomeArenaInputObjectSchema),
        z.lazy(() => TeamUncheckedUpdateWithoutHomeArenaInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TeamCreateWithoutHomeArenaInputObjectSchema),
        z.lazy(() => TeamUncheckedCreateWithoutHomeArenaInputObjectSchema),
      ]),
    })
    .strict();

export const TeamUpsertWithWhereUniqueWithoutHomeArenaInputObjectSchema =
  Schema;
