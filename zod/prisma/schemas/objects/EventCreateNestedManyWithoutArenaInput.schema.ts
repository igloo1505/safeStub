import { z } from 'zod';
import { EventCreateWithoutArenaInputObjectSchema } from './EventCreateWithoutArenaInput.schema';
import { EventUncheckedCreateWithoutArenaInputObjectSchema } from './EventUncheckedCreateWithoutArenaInput.schema';
import { EventCreateOrConnectWithoutArenaInputObjectSchema } from './EventCreateOrConnectWithoutArenaInput.schema';
import { EventCreateManyArenaInputEnvelopeObjectSchema } from './EventCreateManyArenaInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateNestedManyWithoutArenaInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EventCreateWithoutArenaInputObjectSchema),
        z.lazy(() => EventCreateWithoutArenaInputObjectSchema).array(),
        z.lazy(() => EventUncheckedCreateWithoutArenaInputObjectSchema),
        z.lazy(() => EventUncheckedCreateWithoutArenaInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EventCreateOrConnectWithoutArenaInputObjectSchema),
        z.lazy(() => EventCreateOrConnectWithoutArenaInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => EventCreateManyArenaInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => EventWhereUniqueInputObjectSchema),
        z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const EventCreateNestedManyWithoutArenaInputObjectSchema = Schema;
