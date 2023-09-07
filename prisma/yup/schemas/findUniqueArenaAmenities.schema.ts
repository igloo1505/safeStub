import * as Yup from 'yup';
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from './internals'

export const ArenaAmenitiesFindUniqueSchema = Yup.object({ where: ArenaAmenitiesWhereUniqueInputObjectSchema }).required()