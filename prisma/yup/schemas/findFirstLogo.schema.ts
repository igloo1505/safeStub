import * as Yup from 'yup';
import { LogoWhereInputObjectSchema, LogoOrderByWithRelationInputObjectSchema, LogoWhereUniqueInputObjectSchema } from './internals';
import { LogoScalarFieldEnumSchema } from './internals'

export const LogoFindFirstSchema = Yup.object({ where: LogoWhereInputObjectSchema, orderBy: LogoOrderByWithRelationInputObjectSchema, cursor: LogoWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(LogoScalarFieldEnumSchema) }).required()