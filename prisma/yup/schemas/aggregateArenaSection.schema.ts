import * as Yup from 'yup';
import { ArenaSectionWhereInputObjectSchema, ArenaSectionOrderByWithRelationInputObjectSchema, ArenaSectionWhereUniqueInputObjectSchema } from './internals'

export const ArenaSectionAggregateSchema = Yup.object({ where: ArenaSectionWhereInputObjectSchema, orderBy: ArenaSectionOrderByWithRelationInputObjectSchema, cursor: ArenaSectionWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()