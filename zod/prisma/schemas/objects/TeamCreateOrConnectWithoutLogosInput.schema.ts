import { z } from 'zod';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamCreateWithoutLogosInputObjectSchema } from './TeamCreateWithoutLogosInput.schema';
import { TeamUncheckedCreateWithoutLogosInputObjectSchema } from './TeamUncheckedCreateWithoutLogosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCreateOrConnectWithoutLogosInput> = z
  .object({
    where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TeamCreateWithoutLogosInputObjectSchema),
      z.lazy(() => TeamUncheckedCreateWithoutLogosInputObjectSchema),
    ]),
  })
  .strict();

export const TeamCreateOrConnectWithoutLogosInputObjectSchema = Schema;
