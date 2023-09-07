import * as Yup from 'yup';
import { ColorsWhereInputObjectSchema, ColorsOrderByWithRelationInputObjectSchema, ColorsWhereUniqueInputObjectSchema } from './internals';
import { ColorsScalarFieldEnumSchema } from './internals'

export const ColorsFindManySchema = Yup.object({ where: ColorsWhereInputObjectSchema, orderBy: ColorsOrderByWithRelationInputObjectSchema, cursor: ColorsWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(ColorsScalarFieldEnumSchema)  }).required()