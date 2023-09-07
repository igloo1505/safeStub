import { z } from 'zod';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateWithoutEventInputObjectSchema } from './TeamUpdateWithoutEventInput.schema';
import { TeamUncheckedUpdateWithoutEventInputObjectSchema } from './TeamUncheckedUpdateWithoutEventInput.schema';
import { TeamCreateWithoutEventInputObjectSchema } from './TeamCreateWithoutEventInput.schema';
import { TeamUncheckedCreateWithoutEventInputObjectSchema } from './TeamUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUpsertWithWhereUniqueWithoutEventInput> = z
  .object({
    where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TeamUpdateWithoutEventInputObjectSchema),
      z.lazy(() => TeamUncheckedUpdateWithoutEventInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TeamCreateWithoutEventInputObjectSchema),
      z.lazy(() => TeamUncheckedCreateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const TeamUpsertWithWhereUniqueWithoutEventInputObjectSchema = Schema;
