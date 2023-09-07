import { z } from 'zod';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamCreateWithoutColorsInputObjectSchema } from './TeamCreateWithoutColorsInput.schema';
import { TeamUncheckedCreateWithoutColorsInputObjectSchema } from './TeamUncheckedCreateWithoutColorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCreateOrConnectWithoutColorsInput> = z
  .object({
    where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TeamCreateWithoutColorsInputObjectSchema),
      z.lazy(() => TeamUncheckedCreateWithoutColorsInputObjectSchema),
    ]),
  })
  .strict();

export const TeamCreateOrConnectWithoutColorsInputObjectSchema = Schema;
