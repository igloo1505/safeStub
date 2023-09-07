import * as Yup from 'yup';
import { ColorsWhereInputObjectSchema, ColorsOrderByWithRelationInputObjectSchema, ColorsWhereUniqueInputObjectSchema } from './internals'

export const ColorsAggregateSchema = Yup.object({ where: ColorsWhereInputObjectSchema, orderBy: ColorsOrderByWithRelationInputObjectSchema, cursor: ColorsWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()