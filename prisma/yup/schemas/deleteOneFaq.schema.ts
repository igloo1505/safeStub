import * as Yup from 'yup';
import { FaqWhereUniqueInputObjectSchema } from './internals'

export const FaqDeleteOneSchema = Yup.object({ where: FaqWhereUniqueInputObjectSchema  }).required()