import * as Yup from 'yup';
import { ArenaUpdateInputObjectSchema, ArenaWhereUniqueInputObjectSchema } from './internals'

export const ArenaUpdateOneSchema = Yup.object({ data: ArenaUpdateInputObjectSchema, where: ArenaWhereUniqueInputObjectSchema  }).required()