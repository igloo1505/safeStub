import * as Yup from 'yup';
import { TagUpdateManyMutationInputObjectSchema, TagWhereInputObjectSchema } from './internals'

export const TagUpdateManySchema = Yup.object({ data: TagUpdateManyMutationInputObjectSchema, where: TagWhereInputObjectSchema  }).required()