import * as Yup from 'yup';
import { TagWhereInputObjectSchema, TagOrderByWithAggregationInputObjectSchema, TagScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { TagScalarFieldEnumSchema } from './internals'

export const TagGroupBySchema = Yup.object({ where: TagWhereInputObjectSchema, orderBy: TagOrderByWithAggregationInputObjectSchema, having: TagScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(TagScalarFieldEnumSchema).required()  }).required()