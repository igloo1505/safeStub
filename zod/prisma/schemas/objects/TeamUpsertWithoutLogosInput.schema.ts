import { z } from 'zod';
import { TeamUpdateWithoutLogosInputObjectSchema } from './TeamUpdateWithoutLogosInput.schema';
import { TeamUncheckedUpdateWithoutLogosInputObjectSchema } from './TeamUncheckedUpdateWithoutLogosInput.schema';
import { TeamCreateWithoutLogosInputObjectSchema } from './TeamCreateWithoutLogosInput.schema';
import { TeamUncheckedCreateWithoutLogosInputObjectSchema } from './TeamUncheckedCreateWithoutLogosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUpsertWithoutLogosInput> = z
  .object({
    update: z.union([
      z.lazy(() => TeamUpdateWithoutLogosInputObjectSchema),
      z.lazy(() => TeamUncheckedUpdateWithoutLogosInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TeamCreateWithoutLogosInputObjectSchema),
      z.lazy(() => TeamUncheckedCreateWithoutLogosInputObjectSchema),
    ]),
  })
  .strict();

export const TeamUpsertWithoutLogosInputObjectSchema = Schema;
