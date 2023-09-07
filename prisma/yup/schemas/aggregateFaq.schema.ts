import * as Yup from 'yup';
import { FaqWhereInputObjectSchema, FaqOrderByWithRelationInputObjectSchema, FaqWhereUniqueInputObjectSchema } from './internals'

export const FaqAggregateSchema = Yup.object({ where: FaqWhereInputObjectSchema, orderBy: FaqOrderByWithRelationInputObjectSchema, cursor: FaqWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()