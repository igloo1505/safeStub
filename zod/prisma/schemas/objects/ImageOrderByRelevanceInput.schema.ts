import { z } from 'zod';
import { ImageOrderByRelevanceFieldEnumSchema } from '../enums/ImageOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => ImageOrderByRelevanceFieldEnumSchema),
      z.lazy(() => ImageOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const ImageOrderByRelevanceInputObjectSchema = Schema;
