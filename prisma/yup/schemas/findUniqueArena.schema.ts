import * as Yup from 'yup';
import { ArenaWhereUniqueInputObjectSchema } from './internals'

export const ArenaFindUniqueSchema = Yup.object({ where: ArenaWhereUniqueInputObjectSchema }).required()