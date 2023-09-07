import { z } from 'zod';
import { FaqSelectObjectSchema } from './objects/FaqSelect.schema';
import { FaqCreateInputObjectSchema } from './objects/FaqCreateInput.schema';
import { FaqUncheckedCreateInputObjectSchema } from './objects/FaqUncheckedCreateInput.schema';

export const FaqCreateOneSchema = z.object({
  select: FaqSelectObjectSchema.optional(),
  data: z.union([
    FaqCreateInputObjectSchema,
    FaqUncheckedCreateInputObjectSchema,
  ]),
});
