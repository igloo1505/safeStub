import { z } from 'zod';
import { ArenaCreateWithoutHomeTeamsInputObjectSchema } from './ArenaCreateWithoutHomeTeamsInput.schema';
import { ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema } from './ArenaUncheckedCreateWithoutHomeTeamsInput.schema';
import { ArenaCreateOrConnectWithoutHomeTeamsInputObjectSchema } from './ArenaCreateOrConnectWithoutHomeTeamsInput.schema';
import { ArenaUpsertWithoutHomeTeamsInputObjectSchema } from './ArenaUpsertWithoutHomeTeamsInput.schema';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaUpdateWithoutHomeTeamsInputObjectSchema } from './ArenaUpdateWithoutHomeTeamsInput.schema';
import { ArenaUncheckedUpdateWithoutHomeTeamsInputObjectSchema } from './ArenaUncheckedUpdateWithoutHomeTeamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpdateOneWithoutHomeTeamsNestedInput> = z
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
    upsert: z
      .lazy(() => ArenaUpsertWithoutHomeTeamsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ArenaWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArenaUpdateWithoutHomeTeamsInputObjectSchema),
        z.lazy(() => ArenaUncheckedUpdateWithoutHomeTeamsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArenaUpdateOneWithoutHomeTeamsNestedInputObjectSchema = Schema;
