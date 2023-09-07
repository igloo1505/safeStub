import * as Yup from 'yup';
import { LogoWhereUniqueInputObjectSchema } from './internals'

export const LogoFindUniqueSchema = Yup.object({ where: LogoWhereUniqueInputObjectSchema }).required()