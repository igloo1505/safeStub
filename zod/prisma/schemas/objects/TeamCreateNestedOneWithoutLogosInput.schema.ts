import { z } from 'zod';
import { TeamCreateWithoutLogosInputObjectSchema } from './TeamCreateWithoutLogosInput.schema';
import { TeamUncheckedCreateWithoutLogosInputObjectSchema } from './TeamUncheckedCreateWithoutLogosInput.schema';
import { TeamCreateOrConnectWithoutLogosInputObjectSchema } from './TeamCreateOrConnectWithoutLogosInput.schema';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCreateNestedOneWithoutLogosInput> = z
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
    connect: z.lazy(() => TeamWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TeamCreateNestedOneWithoutLogosInputObjectSchema = Schema;
