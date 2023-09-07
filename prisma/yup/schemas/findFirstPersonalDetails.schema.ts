import * as Yup from 'yup';
import { PersonalDetailsWhereInputObjectSchema, PersonalDetailsOrderByWithRelationInputObjectSchema, PersonalDetailsWhereUniqueInputObjectSchema } from './internals';
import { PersonalDetailsScalarFieldEnumSchema } from './internals'

export const PersonalDetailsFindFirstSchema = Yup.object({ where: PersonalDetailsWhereInputObjectSchema, orderBy: PersonalDetailsOrderByWithRelationInputObjectSchema, cursor: PersonalDetailsWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(PersonalDetailsScalarFieldEnumSchema) }).required()