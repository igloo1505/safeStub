import { z } from 'zod';
import { ArenaScalarWhereInputObjectSchema } from './ArenaScalarWhereInput.schema';
import { ArenaUpdateManyMutationInputObjectSchema } from './ArenaUpdateManyMutationInput.schema';
import { ArenaUncheckedUpdateManyWithoutArenaInputObjectSchema } from './ArenaUncheckedUpdateManyWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpdateManyWithWhereWithoutAmenitiesInput> =
  z
    .object({
      where: z.lazy(() => ArenaScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ArenaUpdateManyMutationInputObjectSchema),
        z.lazy(() => ArenaUncheckedUpdateManyWithoutArenaInputObjectSchema),
      ]),
    })
    .strict();

export const ArenaUpdateManyWithWhereWithoutAmenitiesInputObjectSchema = Schema;
