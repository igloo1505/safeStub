import * as Yup from 'yup';
import { FaqWhereInputObjectSchema, FaqOrderByWithAggregationInputObjectSchema, FaqScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { FaqScalarFieldEnumSchema } from './internals'

export const FaqGroupBySchema = Yup.object({ where: FaqWhereInputObjectSchema, orderBy: FaqOrderByWithAggregationInputObjectSchema, having: FaqScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(FaqScalarFieldEnumSchema).required()  }).required()