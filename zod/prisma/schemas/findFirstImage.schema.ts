import { z } from 'zod';
import { ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageIncludeObjectSchema } from './objects/ImageInclude.schema';
import { ImageOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/ImageOrderByWithRelationAndSearchRelevanceInput.schema';
import { ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';
import { ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';
import { ImageScalarFieldEnumSchema } from './enums/ImageScalarFieldEnum.schema';

export const ImageFindFirstSchema = z.object({
  select: ImageSelectObjectSchema.optional(),
  include: ImageIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ImageOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      ImageOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: ImageWhereInputObjectSchema.optional(),
  cursor: ImageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ImageScalarFieldEnumSchema).optional(),
});
