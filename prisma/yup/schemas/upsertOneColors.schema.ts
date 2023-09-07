import * as Yup from 'yup';
import { ColorsWhereUniqueInputObjectSchema, ColorsCreateInputObjectSchema, ColorsUpdateInputObjectSchema } from './internals'

export const ColorsUpsertSchema = Yup.object({ where: ColorsWhereUniqueInputObjectSchema, data: ColorsCreateInputObjectSchema, update: ColorsUpdateInputObjectSchema  }).required()