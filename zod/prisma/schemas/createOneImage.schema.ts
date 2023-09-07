import { z } from 'zod';
import { ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageIncludeObjectSchema } from './objects/ImageInclude.schema';
import { ImageCreateInputObjectSchema } from './objects/ImageCreateInput.schema';
import { ImageUncheckedCreateInputObjectSchema } from './objects/ImageUncheckedCreateInput.schema';

export const ImageCreateOneSchema = z.object({
  select: ImageSelectObjectSchema.optional(),
  include: ImageIncludeObjectSchema.optional(),
  data: z.union([
    ImageCreateInputObjectSchema,
    ImageUncheckedCreateInputObjectSchema,
  ]),
});
