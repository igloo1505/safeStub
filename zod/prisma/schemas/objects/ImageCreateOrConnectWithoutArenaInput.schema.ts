import { z } from 'zod';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageCreateWithoutArenaInputObjectSchema } from './ImageCreateWithoutArenaInput.schema';
import { ImageUncheckedCreateWithoutArenaInputObjectSchema } from './ImageUncheckedCreateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateOrConnectWithoutArenaInput> = z
  .object({
    where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ImageCreateWithoutArenaInputObjectSchema),
      z.lazy(() => ImageUncheckedCreateWithoutArenaInputObjectSchema),
    ]),
  })
  .strict();

export const ImageCreateOrConnectWithoutArenaInputObjectSchema = Schema;
