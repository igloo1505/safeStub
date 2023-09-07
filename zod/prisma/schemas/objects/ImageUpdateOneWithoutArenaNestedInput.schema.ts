import { z } from 'zod';
import { ImageCreateWithoutArenaInputObjectSchema } from './ImageCreateWithoutArenaInput.schema';
import { ImageUncheckedCreateWithoutArenaInputObjectSchema } from './ImageUncheckedCreateWithoutArenaInput.schema';
import { ImageCreateOrConnectWithoutArenaInputObjectSchema } from './ImageCreateOrConnectWithoutArenaInput.schema';
import { ImageUpsertWithoutArenaInputObjectSchema } from './ImageUpsertWithoutArenaInput.schema';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutArenaInputObjectSchema } from './ImageUpdateWithoutArenaInput.schema';
import { ImageUncheckedUpdateWithoutArenaInputObjectSchema } from './ImageUncheckedUpdateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpdateOneWithoutArenaNestedInput> = z
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
    upsert: z.lazy(() => ImageUpsertWithoutArenaInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ImageWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ImageUpdateWithoutArenaInputObjectSchema),
        z.lazy(() => ImageUncheckedUpdateWithoutArenaInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ImageUpdateOneWithoutArenaNestedInputObjectSchema = Schema;
