import * as Yup from 'yup';
import { FaqWhereUniqueInputObjectSchema } from './internals'

export const FaqFindUniqueSchema = Yup.object({ where: FaqWhereUniqueInputObjectSchema }).required()