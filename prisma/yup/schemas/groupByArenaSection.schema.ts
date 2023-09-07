import * as Yup from 'yup';
import { ArenaSectionWhereInputObjectSchema, ArenaSectionOrderByWithAggregationInputObjectSchema, ArenaSectionScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { ArenaSectionScalarFieldEnumSchema } from './internals'

export const ArenaSectionGroupBySchema = Yup.object({ where: ArenaSectionWhereInputObjectSchema, orderBy: ArenaSectionOrderByWithAggregationInputObjectSchema, having: ArenaSectionScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(ArenaSectionScalarFieldEnumSchema).required()  }).required()