import { z } from 'zod';
import { FaqSelectObjectSchema } from './objects/FaqSelect.schema';
import { FaqWhereUniqueInputObjectSchema } from './objects/FaqWhereUniqueInput.schema';

export const FaqFindUniqueSchema = z.object({
  select: FaqSelectObjectSchema.optional(),
  where: FaqWhereUniqueInputObjectSchema,
});
