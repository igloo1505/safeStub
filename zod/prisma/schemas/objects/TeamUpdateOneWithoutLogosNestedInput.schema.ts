import { z } from 'zod';
import { TeamCreateWithoutLogosInputObjectSchema } from './TeamCreateWithoutLogosInput.schema';
import { TeamUncheckedCreateWithoutLogosInputObjectSchema } from './TeamUncheckedCreateWithoutLogosInput.schema';
import { TeamCreateOrConnectWithoutLogosInputObjectSchema } from './TeamCreateOrConnectWithoutLogosInput.schema';
import { TeamUpsertWithoutLogosInputObjectSchema } from './TeamUpsertWithoutLogosInput.schema';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateWithoutLogosInputObjectSchema } from './TeamUpdateWithoutLogosInput.schema';
import { TeamUncheckedUpdateWithoutLogosInputObjectSchema } from './TeamUncheckedUpdateWithoutLogosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUpdateOneWithoutLogosNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TeamCreateWithoutLogosInputObjectSchema),
        z.lazy(() => TeamUncheckedCreateWithoutLogosInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => TeamCreateOrConnectWithoutLogosInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => TeamUpsertWithoutLogosInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => TeamWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => TeamUpdateWithoutLogosInputObjectSchema),
        z.lazy(() => TeamUncheckedUpdateWithoutLogosInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TeamUpdateOneWithoutLogosNestedInputObjectSchema = Schema;
