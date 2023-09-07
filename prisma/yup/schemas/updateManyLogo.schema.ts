import * as Yup from 'yup';
import { LogoUpdateManyMutationInputObjectSchema, LogoWhereInputObjectSchema } from './internals'

export const LogoUpdateManySchema = Yup.object({ data: LogoUpdateManyMutationInputObjectSchema, where: LogoWhereInputObjectSchema  }).required()