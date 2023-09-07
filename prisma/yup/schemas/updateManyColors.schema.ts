import * as Yup from 'yup';
import { ColorsUpdateManyMutationInputObjectSchema, ColorsWhereInputObjectSchema } from './internals'

export const ColorsUpdateManySchema = Yup.object({ data: ColorsUpdateManyMutationInputObjectSchema, where: ColorsWhereInputObjectSchema  }).required()