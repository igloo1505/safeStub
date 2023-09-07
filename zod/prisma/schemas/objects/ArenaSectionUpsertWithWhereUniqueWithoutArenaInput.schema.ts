import { z } from 'zod';
import { ArenaSectionWhereUniqueInputObjectSchema } from './ArenaSectionWhereUniqueInput.schema';
import { ArenaSectionUpdateWithoutArenaInputObjectSchema } from './ArenaSectionUpdateWithoutArenaInput.schema';
import { ArenaSectionUncheckedUpdateWithoutArenaInputObjectSchema } from './ArenaSectionUncheckedUpdateWithoutArenaInput.schema';
import { ArenaSectionCreateWithoutArenaInputObjectSchema } from './ArenaSectionCreateWithoutArenaInput.schema';
import { ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema } from './ArenaSectionUncheckedCreateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUpsertWithWhereUniqueWithoutArenaInput> =
  z
    .object({
      where: z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ArenaSectionUpdateWithoutArenaInputObjectSchema),
        z.lazy(() => ArenaSectionUncheckedUpdateWithoutArenaInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ArenaSectionCreateWithoutArenaInputObjectSchema),
        z.lazy(() => ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema),
      ]),
    })
    .strict();

export const ArenaSectionUpsertWithWhereUniqueWithoutArenaInputObjectSchema =
  Schema;
