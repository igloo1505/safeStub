import * as Yup from 'yup';
import { LogoWhereInputObjectSchema, LogoOrderByWithAggregationInputObjectSchema, LogoScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { LogoScalarFieldEnumSchema } from './internals'

export const LogoGroupBySchema = Yup.object({ where: LogoWhereInputObjectSchema, orderBy: LogoOrderByWithAggregationInputObjectSchema, having: LogoScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(LogoScalarFieldEnumSchema).required()  }).required()