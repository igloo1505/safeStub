import { z } from 'zod';
import { ArenaSectionWhereUniqueInputObjectSchema } from './ArenaSectionWhereUniqueInput.schema';
import { ArenaSectionUpdateWithoutArenaInputObjectSchema } from './ArenaSectionUpdateWithoutArenaInput.schema';
import { ArenaSectionUncheckedUpdateWithoutArenaInputObjectSchema } from './ArenaSectionUncheckedUpdateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUpdateWithWhereUniqueWithoutArenaInput> =
  z
    .object({
      where: z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ArenaSectionUpdateWithoutArenaInputObjectSchema),
        z.lazy(() => ArenaSectionUncheckedUpdateWithoutArenaInputObjectSchema),
      ]),
    })
    .strict();

export const ArenaSectionUpdateWithWhereUniqueWithoutArenaInputObjectSchema =
  Schema;
