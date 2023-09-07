import { z } from 'zod';
import { FaqSelectObjectSchema } from './objects/FaqSelect.schema';
import { FaqUpdateInputObjectSchema } from './objects/FaqUpdateInput.schema';
import { FaqUncheckedUpdateInputObjectSchema } from './objects/FaqUncheckedUpdateInput.schema';
import { FaqWhereUniqueInputObjectSchema } from './objects/FaqWhereUniqueInput.schema';

export const FaqUpdateOneSchema = z.object({
  select: FaqSelectObjectSchema.optional(),
  data: z.union([
    FaqUpdateInputObjectSchema,
    FaqUncheckedUpdateInputObjectSchema,
  ]),
  where: FaqWhereUniqueInputObjectSchema,
});
