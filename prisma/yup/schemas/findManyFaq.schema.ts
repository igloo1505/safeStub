import * as Yup from 'yup';
import { FaqWhereInputObjectSchema, FaqOrderByWithRelationInputObjectSchema, FaqWhereUniqueInputObjectSchema } from './internals';
import { FaqScalarFieldEnumSchema } from './internals'

export const FaqFindManySchema = Yup.object({ where: FaqWhereInputObjectSchema, orderBy: FaqOrderByWithRelationInputObjectSchema, cursor: FaqWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(FaqScalarFieldEnumSchema)  }).required()