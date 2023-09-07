import { z } from 'zod';
import { TeamCreateWithoutEventInputObjectSchema } from './TeamCreateWithoutEventInput.schema';
import { TeamUncheckedCreateWithoutEventInputObjectSchema } from './TeamUncheckedCreateWithoutEventInput.schema';
import { TeamCreateOrConnectWithoutEventInputObjectSchema } from './TeamCreateOrConnectWithoutEventInput.schema';
import { TeamUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './TeamUpsertWithWhereUniqueWithoutEventInput.schema';
import { TeamCreateManyEventInputEnvelopeObjectSchema } from './TeamCreateManyEventInputEnvelope.schema';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './TeamUpdateWithWhereUniqueWithoutEventInput.schema';
import { TeamUpdateManyWithWhereWithoutEventInputObjectSchema } from './TeamUpdateManyWithWhereWithoutEventInput.schema';
import { TeamScalarWhereInputObjectSchema } from './TeamScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUpdateManyWithoutEventNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TeamCreateWithoutEventInputObjectSchema),
        z.lazy(() => TeamCreateWithoutEventInputObjectSchema).array(),
        z.lazy(() => TeamUncheckedCreateWithoutEventInputObjectSchema),
        z.lazy(() => TeamUncheckedCreateWithoutEventInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TeamCreateOrConnectWithoutEventInputObjectSchema),
        z.lazy(() => TeamCreateOrConnectWithoutEventInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => TeamUpsertWithWhereUniqueWithoutEventInputObjectSchema),
        z
          .lazy(() => TeamUpsertWithWhereUniqueWithoutEventInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TeamCreateManyEventInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => TeamWhereUniqueInputObjectSchema),
        z.lazy(() => TeamWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => TeamWhereUniqueInputObjectSchema),
        z.lazy(() => TeamWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => TeamWhereUniqueInputObjectSchema),
        z.lazy(() => TeamWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TeamWhereUniqueInputObjectSchema),
        z.lazy(() => TeamWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => TeamUpdateWithWhereUniqueWithoutEventInputObjectSchema),
        z
          .lazy(() => TeamUpdateWithWhereUniqueWithoutEventInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => TeamUpdateManyWithWhereWithoutEventInputObjectSchema),
        z
          .lazy(() => TeamUpdateManyWithWhereWithoutEventInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => TeamScalarWhereInputObjectSchema),
        z.lazy(() => TeamScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TeamUpdateManyWithoutEventNestedInputObjectSchema = Schema;
