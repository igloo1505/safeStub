import * as Yup from 'yup';
import { TagWhereInputObjectSchema, TagOrderByWithRelationInputObjectSchema, TagWhereUniqueInputObjectSchema } from './internals';
import { TagScalarFieldEnumSchema } from './internals'

export const TagFindManySchema = Yup.object({ where: TagWhereInputObjectSchema, orderBy: TagOrderByWithRelationInputObjectSchema, cursor: TagWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(TagScalarFieldEnumSchema)  }).required()