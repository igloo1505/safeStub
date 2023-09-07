import * as Yup from 'yup';
import { TagWhereUniqueInputObjectSchema, TagCreateInputObjectSchema, TagUpdateInputObjectSchema } from './internals'

export const TagUpsertSchema = Yup.object({ where: TagWhereUniqueInputObjectSchema, data: TagCreateInputObjectSchema, update: TagUpdateInputObjectSchema  }).required()