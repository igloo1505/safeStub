import { z } from 'zod';
import { ImageCreateWithoutArenaInputObjectSchema } from './ImageCreateWithoutArenaInput.schema';
import { ImageUncheckedCreateWithoutArenaInputObjectSchema } from './ImageUncheckedCreateWithoutArenaInput.schema';
import { ImageCreateOrConnectWithoutArenaInputObjectSchema } from './ImageCreateOrConnectWithoutArenaInput.schema';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateNestedOneWithoutArenaInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ImageCreateWithoutArenaInputObjectSchema),
        z.lazy(() => ImageUncheckedCreateWithoutArenaInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ImageCreateOrConnectWithoutArenaInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ImageWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ImageCreateNestedOneWithoutArenaInputObjectSchema = Schema;
