import * as Yup from 'yup';
import { ArenaUpdateManyMutationInputObjectSchema, ArenaWhereInputObjectSchema } from './internals'

export const ArenaUpdateManySchema = Yup.object({ data: ArenaUpdateManyMutationInputObjectSchema, where: ArenaWhereInputObjectSchema  }).required()