import { z } from 'zod';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaUpdateWithoutLocationInputObjectSchema } from './ArenaUpdateWithoutLocationInput.schema';
import { ArenaUncheckedUpdateWithoutLocationInputObjectSchema } from './ArenaUncheckedUpdateWithoutLocationInput.schema';
import { ArenaCreateWithoutLocationInputObjectSchema } from './ArenaCreateWithoutLocationInput.schema';
import { ArenaUncheckedCreateWithoutLocationInputObjectSchema } from './ArenaUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpsertWithWhereUniqueWithoutLocationInput> =
  z
    .object({
      where: z.lazy(() => ArenaWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ArenaUpdateWithoutLocationInputObjectSchema),
        z.lazy(() => ArenaUncheckedUpdateWithoutLocationInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ArenaCreateWithoutLocationInputObjectSchema),
        z.lazy(() => ArenaUncheckedCreateWithoutLocationInputObjectSchema),
      ]),
    })
    .strict();

export const ArenaUpsertWithWhereUniqueWithoutLocationInputObjectSchema =
  Schema;
