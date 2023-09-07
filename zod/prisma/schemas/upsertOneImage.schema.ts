import { z } from 'zod';
import { ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageIncludeObjectSchema } from './objects/ImageInclude.schema';
import { ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';
import { ImageCreateInputObjectSchema } from './objects/ImageCreateInput.schema';
import { ImageUncheckedCreateInputObjectSchema } from './objects/ImageUncheckedCreateInput.schema';
import { ImageUpdateInputObjectSchema } from './objects/ImageUpdateInput.schema';
import { ImageUncheckedUpdateInputObjectSchema } from './objects/ImageUncheckedUpdateInput.schema';

export const ImageUpsertSchema = z.object({
  select: ImageSelectObjectSchema.optional(),
  include: ImageIncludeObjectSchema.optional(),
  where: ImageWhereUniqueInputObjectSchema,
  create: z.union([
    ImageCreateInputObjectSchema,
    ImageUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ImageUpdateInputObjectSchema,
    ImageUncheckedUpdateInputObjectSchema,
  ]),
});
