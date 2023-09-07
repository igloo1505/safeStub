import * as Yup from 'yup';
import { TagWhereUniqueInputObjectSchema } from './internals'

export const TagDeleteOneSchema = Yup.object({ where: TagWhereUniqueInputObjectSchema  }).required()