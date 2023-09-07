import { z } from 'zod';
import { ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageIncludeObjectSchema } from './objects/ImageInclude.schema';
import { ImageUpdateInputObjectSchema } from './objects/ImageUpdateInput.schema';
import { ImageUncheckedUpdateInputObjectSchema } from './objects/ImageUncheckedUpdateInput.schema';
import { ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';

export const ImageUpdateOneSchema = z.object({
  select: ImageSelectObjectSchema.optional(),
  include: ImageIncludeObjectSchema.optional(),
  data: z.union([
    ImageUpdateInputObjectSchema,
    ImageUncheckedUpdateInputObjectSchema,
  ]),
  where: ImageWhereUniqueInputObjectSchema,
});
