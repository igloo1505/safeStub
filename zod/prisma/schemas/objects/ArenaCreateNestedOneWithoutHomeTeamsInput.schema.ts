import { z } from 'zod';
import { ArenaCreateWithoutHomeTeamsInputObjectSchema } from './ArenaCreateWithoutHomeTeamsInput.schema';
import { ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema } from './ArenaUncheckedCreateWithoutHomeTeamsInput.schema';
import { ArenaCreateOrConnectWithoutHomeTeamsInputObjectSchema } from './ArenaCreateOrConnectWithoutHomeTeamsInput.schema';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateNestedOneWithoutHomeTeamsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArenaCreateWithoutHomeTeamsInputObjectSchema),
        z.lazy(() => ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ArenaCreateOrConnectWithoutHomeTeamsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ArenaWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema = Schema;
