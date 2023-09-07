import * as Yup from 'yup';
import { LogoWhereUniqueInputObjectSchema, LogoCreateInputObjectSchema, LogoUpdateInputObjectSchema } from './internals'

export const LogoUpsertSchema = Yup.object({ where: LogoWhereUniqueInputObjectSchema, data: LogoCreateInputObjectSchema, update: LogoUpdateInputObjectSchema  }).required()