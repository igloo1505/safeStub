import { z } from 'zod';
import { ArenaSectionSelectObjectSchema } from './objects/ArenaSectionSelect.schema';
import { ArenaSectionIncludeObjectSchema } from './objects/ArenaSectionInclude.schema';
import { ArenaSectionWhereUniqueInputObjectSchema } from './objects/ArenaSectionWhereUniqueInput.schema';
import { ArenaSectionCreateInputObjectSchema } from './objects/ArenaSectionCreateInput.schema';
import { ArenaSectionUncheckedCreateInputObjectSchema } from './objects/ArenaSectionUncheckedCreateInput.schema';
import { ArenaSectionUpdateInputObjectSchema } from './objects/ArenaSectionUpdateInput.schema';
import { ArenaSectionUncheckedUpdateInputObjectSchema } from './objects/ArenaSectionUncheckedUpdateInput.schema';

export const ArenaSectionUpsertSchema = z.object({
  select: ArenaSectionSelectObjectSchema.optional(),
  include: ArenaSectionIncludeObjectSchema.optional(),
  where: ArenaSectionWhereUniqueInputObjectSchema,
  create: z.union([
    ArenaSectionCreateInputObjectSchema,
    ArenaSectionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ArenaSectionUpdateInputObjectSchema,
    ArenaSectionUncheckedUpdateInputObjectSchema,
  ]),
});
