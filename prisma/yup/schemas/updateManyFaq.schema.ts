import * as Yup from 'yup';
import { FaqUpdateManyMutationInputObjectSchema, FaqWhereInputObjectSchema } from './internals'

export const FaqUpdateManySchema = Yup.object({ data: FaqUpdateManyMutationInputObjectSchema, where: FaqWhereInputObjectSchema  }).required()