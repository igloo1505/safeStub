import * as Yup from 'yup';
import { ArenaWhereUniqueInputObjectSchema, ArenaCreateInputObjectSchema, ArenaUpdateInputObjectSchema } from './internals'

export const ArenaUpsertSchema = Yup.object({ where: ArenaWhereUniqueInputObjectSchema, data: ArenaCreateInputObjectSchema, update: ArenaUpdateInputObjectSchema  }).required()