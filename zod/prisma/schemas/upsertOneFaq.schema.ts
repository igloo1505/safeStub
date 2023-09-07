import { z } from 'zod';
import { FaqSelectObjectSchema } from './objects/FaqSelect.schema';
import { FaqWhereUniqueInputObjectSchema } from './objects/FaqWhereUniqueInput.schema';
import { FaqCreateInputObjectSchema } from './objects/FaqCreateInput.schema';
import { FaqUncheckedCreateInputObjectSchema } from './objects/FaqUncheckedCreateInput.schema';
import { FaqUpdateInputObjectSchema } from './objects/FaqUpdateInput.schema';
import { FaqUncheckedUpdateInputObjectSchema } from './objects/FaqUncheckedUpdateInput.schema';

export const FaqUpsertSchema = z.object({
  select: FaqSelectObjectSchema.optional(),
  where: FaqWhereUniqueInputObjectSchema,
  create: z.union([
    FaqCreateInputObjectSchema,
    FaqUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FaqUpdateInputObjectSchema,
    FaqUncheckedUpdateInputObjectSchema,
  ]),
});
