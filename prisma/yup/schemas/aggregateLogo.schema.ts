import * as Yup from 'yup';
import { LogoWhereInputObjectSchema, LogoOrderByWithRelationInputObjectSchema, LogoWhereUniqueInputObjectSchema } from './internals'

export const LogoAggregateSchema = Yup.object({ where: LogoWhereInputObjectSchema, orderBy: LogoOrderByWithRelationInputObjectSchema, cursor: LogoWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()