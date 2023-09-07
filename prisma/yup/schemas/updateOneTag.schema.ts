import * as Yup from 'yup';
import { TagUpdateInputObjectSchema, TagWhereUniqueInputObjectSchema } from './internals'

export const TagUpdateOneSchema = Yup.object({ data: TagUpdateInputObjectSchema, where: TagWhereUniqueInputObjectSchema  }).required()