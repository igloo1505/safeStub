import { z } from 'zod';
import { ArenaSectionSelectObjectSchema } from './objects/ArenaSectionSelect.schema';
import { ArenaSectionIncludeObjectSchema } from './objects/ArenaSectionInclude.schema';
import { ArenaSectionWhereUniqueInputObjectSchema } from './objects/ArenaSectionWhereUniqueInput.schema';

export const ArenaSectionFindUniqueSchema = z.object({
  select: ArenaSectionSelectObjectSchema.optional(),
  include: ArenaSectionIncludeObjectSchema.optional(),
  where: ArenaSectionWhereUniqueInputObjectSchema,
});
