import { z } from 'zod';
import { ArenaSectionSelectObjectSchema } from './objects/ArenaSectionSelect.schema';
import { ArenaSectionIncludeObjectSchema } from './objects/ArenaSectionInclude.schema';
import { ArenaSectionUpdateInputObjectSchema } from './objects/ArenaSectionUpdateInput.schema';
import { ArenaSectionUncheckedUpdateInputObjectSchema } from './objects/ArenaSectionUncheckedUpdateInput.schema';
import { ArenaSectionWhereUniqueInputObjectSchema } from './objects/ArenaSectionWhereUniqueInput.schema';

export const ArenaSectionUpdateOneSchema = z.object({
  select: ArenaSectionSelectObjectSchema.optional(),
  include: ArenaSectionIncludeObjectSchema.optional(),
  data: z.union([
    ArenaSectionUpdateInputObjectSchema,
    ArenaSectionUncheckedUpdateInputObjectSchema,
  ]),
  where: ArenaSectionWhereUniqueInputObjectSchema,
});
