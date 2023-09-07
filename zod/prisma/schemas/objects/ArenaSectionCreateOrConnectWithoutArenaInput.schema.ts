import { z } from 'zod';
import { ArenaSectionWhereUniqueInputObjectSchema } from './ArenaSectionWhereUniqueInput.schema';
import { ArenaSectionCreateWithoutArenaInputObjectSchema } from './ArenaSectionCreateWithoutArenaInput.schema';
import { ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema } from './ArenaSectionUncheckedCreateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCreateOrConnectWithoutArenaInput> = z
  .object({
    where: z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArenaSectionCreateWithoutArenaInputObjectSchema),
      z.lazy(() => ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema),
    ]),
  })
  .strict();

export const ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema = Schema;
