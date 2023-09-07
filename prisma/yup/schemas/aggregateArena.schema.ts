import * as Yup from 'yup';
import { ArenaWhereInputObjectSchema, ArenaOrderByWithRelationInputObjectSchema, ArenaWhereUniqueInputObjectSchema } from './internals'

export const ArenaAggregateSchema = Yup.object({ where: ArenaWhereInputObjectSchema, orderBy: ArenaOrderByWithRelationInputObjectSchema, cursor: ArenaWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()