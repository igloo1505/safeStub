import * as Yup from 'yup';
import { LogoWhereInputObjectSchema } from './internals'

export const LogoDeleteManySchema = Yup.object({ LogoWhereInputObjectSchema  }).required()