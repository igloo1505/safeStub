import * as Yup from 'yup';
import { LocationWhereUniqueInputObjectSchema } from './internals'

export const LocationFindUniqueSchema = Yup.object({ where: LocationWhereUniqueInputObjectSchema }).required()