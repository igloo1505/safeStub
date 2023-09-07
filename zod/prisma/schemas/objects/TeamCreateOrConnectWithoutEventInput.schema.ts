import { z } from 'zod';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamCreateWithoutEventInputObjectSchema } from './TeamCreateWithoutEventInput.schema';
import { TeamUncheckedCreateWithoutEventInputObjectSchema } from './TeamUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCreateOrConnectWithoutEventInput> = z
  .object({
    where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TeamCreateWithoutEventInputObjectSchema),
      z.lazy(() => TeamUncheckedCreateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const TeamCreateOrConnectWithoutEventInputObjectSchema = Schema;
