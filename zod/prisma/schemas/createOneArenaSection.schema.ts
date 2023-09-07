import { z } from 'zod';
import { ArenaSectionSelectObjectSchema } from './objects/ArenaSectionSelect.schema';
import { ArenaSectionIncludeObjectSchema } from './objects/ArenaSectionInclude.schema';
import { ArenaSectionCreateInputObjectSchema } from './objects/ArenaSectionCreateInput.schema';
import { ArenaSectionUncheckedCreateInputObjectSchema } from './objects/ArenaSectionUncheckedCreateInput.schema';

export const ArenaSectionCreateOneSchema = z.object({
  select: ArenaSectionSelectObjectSchema.optional(),
  include: ArenaSectionIncludeObjectSchema.optional(),
  data: z.union([
    ArenaSectionCreateInputObjectSchema,
    ArenaSectionUncheckedCreateInputObjectSchema,
  ]),
});
