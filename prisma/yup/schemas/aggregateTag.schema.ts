import * as Yup from 'yup';
import { TagWhereInputObjectSchema, TagOrderByWithRelationInputObjectSchema, TagWhereUniqueInputObjectSchema } from './internals'

export const TagAggregateSchema = Yup.object({ where: TagWhereInputObjectSchema, orderBy: TagOrderByWithRelationInputObjectSchema, cursor: TagWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()