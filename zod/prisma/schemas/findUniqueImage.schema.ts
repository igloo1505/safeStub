import { z } from 'zod';
import { ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageIncludeObjectSchema } from './objects/ImageInclude.schema';
import { ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';

export const ImageFindUniqueSchema = z.object({
  select: ImageSelectObjectSchema.optional(),
  include: ImageIncludeObjectSchema.optional(),
  where: ImageWhereUniqueInputObjectSchema,
});
