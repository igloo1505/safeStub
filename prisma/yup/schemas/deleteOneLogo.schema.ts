import * as Yup from 'yup';
import { LogoWhereUniqueInputObjectSchema } from './internals'

export const LogoDeleteOneSchema = Yup.object({ where: LogoWhereUniqueInputObjectSchema  }).required()