import { z } from 'zod';
import { ImageUpdateWithoutArenaInputObjectSchema } from './ImageUpdateWithoutArenaInput.schema';
import { ImageUncheckedUpdateWithoutArenaInputObjectSchema } from './ImageUncheckedUpdateWithoutArenaInput.schema';
import { ImageCreateWithoutArenaInputObjectSchema } from './ImageCreateWithoutArenaInput.schema';
import { ImageUncheckedCreateWithoutArenaInputObjectSchema } from './ImageUncheckedCreateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpsertWithoutArenaInput> = z
  .object({
    update: z.union([
      z.lazy(() => ImageUpdateWithoutArenaInputObjectSchema),
      z.lazy(() => ImageUncheckedUpdateWithoutArenaInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ImageCreateWithoutArenaInputObjectSchema),
      z.lazy(() => ImageUncheckedCreateWithoutArenaInputObjectSchema),
    ]),
  })
  .strict();

export const ImageUpsertWithoutArenaInputObjectSchema = Schema;
