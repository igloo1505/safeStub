import { z } from 'zod';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateWithoutEventInputObjectSchema } from './TeamUpdateWithoutEventInput.schema';
import { TeamUncheckedUpdateWithoutEventInputObjectSchema } from './TeamUncheckedUpdateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUpdateWithWhereUniqueWithoutEventInput> = z
  .object({
    where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TeamUpdateWithoutEventInputObjectSchema),
      z.lazy(() => TeamUncheckedUpdateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const TeamUpdateWithWhereUniqueWithoutEventInputObjectSchema = Schema;
