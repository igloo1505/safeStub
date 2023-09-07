import * as Yup from 'yup';
import { ArenaWhereUniqueInputObjectSchema } from './internals'

export const ArenaDeleteOneSchema = Yup.object({ where: ArenaWhereUniqueInputObjectSchema  }).required()