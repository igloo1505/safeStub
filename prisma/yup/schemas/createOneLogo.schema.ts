import * as Yup from 'yup';
import { LogoCreateInputObjectSchema } from './internals'

export const LogoCreateSchema = Yup.object({ data: LogoCreateInputObjectSchema  }).required()