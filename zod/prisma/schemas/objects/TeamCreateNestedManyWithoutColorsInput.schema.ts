import { z } from 'zod';
import { TeamCreateWithoutColorsInputObjectSchema } from './TeamCreateWithoutColorsInput.schema';
import { TeamUncheckedCreateWithoutColorsInputObjectSchema } from './TeamUncheckedCreateWithoutColorsInput.schema';
import { TeamCreateOrConnectWithoutColorsInputObjectSchema } from './TeamCreateOrConnectWithoutColorsInput.schema';
import { TeamCreateManyColorsInputEnvelopeObjectSchema } from './TeamCreateManyColorsInputEnvelope.schema';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCreateNestedManyWithoutColorsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TeamCreateWithoutColorsInputObjectSchema),
        z.lazy(() => TeamCreateWithoutColorsInputObjectSchema).array(),
        z.lazy(() => TeamUncheckedCreateWithoutColorsInputObjectSchema),
        z.lazy(() => TeamUncheckedCreateWithoutColorsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TeamCreateOrConnectWithoutColorsInputObjectSchema),
        z.lazy(() => TeamCreateOrConnectWithoutColorsInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TeamCreateManyColorsInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TeamWhereUniqueInputObjectSchema),
        z.lazy(() => TeamWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TeamCreateNestedManyWithoutColorsInputObjectSchema = Schema;
