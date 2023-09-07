import * as Yup from 'yup';
import { ColorsWhereInputObjectSchema, ColorsOrderByWithAggregationInputObjectSchema, ColorsScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { ColorsScalarFieldEnumSchema } from './internals'

export const ColorsGroupBySchema = Yup.object({ where: ColorsWhereInputObjectSchema, orderBy: ColorsOrderByWithAggregationInputObjectSchema, having: ColorsScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(ColorsScalarFieldEnumSchema).required()  }).required()