import * as Yup from 'yup';
import { PersonalDetailsWhereInputObjectSchema, PersonalDetailsOrderByWithRelationInputObjectSchema, PersonalDetailsWhereUniqueInputObjectSchema } from './internals'

export const PersonalDetailsAggregateSchema = Yup.object({ where: PersonalDetailsWhereInputObjectSchema, orderBy: PersonalDetailsOrderByWithRelationInputObjectSchema, cursor: PersonalDetailsWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()