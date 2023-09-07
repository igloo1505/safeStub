import * as Yup from 'yup';
import { PersonalDetailsWhereInputObjectSchema, PersonalDetailsOrderByWithAggregationInputObjectSchema, PersonalDetailsScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { PersonalDetailsScalarFieldEnumSchema } from './internals'

export const PersonalDetailsGroupBySchema = Yup.object({ where: PersonalDetailsWhereInputObjectSchema, orderBy: PersonalDetailsOrderByWithAggregationInputObjectSchema, having: PersonalDetailsScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(PersonalDetailsScalarFieldEnumSchema).required()  }).required()