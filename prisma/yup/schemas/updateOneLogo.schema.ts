import * as Yup from 'yup';
import { LogoUpdateInputObjectSchema, LogoWhereUniqueInputObjectSchema } from './internals'

export const LogoUpdateOneSchema = Yup.object({ data: LogoUpdateInputObjectSchema, where: LogoWhereUniqueInputObjectSchema  }).required()