import * as Yup from 'yup';
import { TagWhereUniqueInputObjectSchema } from './internals'

export const TagFindUniqueSchema = Yup.object({ where: TagWhereUniqueInputObjectSchema }).required()