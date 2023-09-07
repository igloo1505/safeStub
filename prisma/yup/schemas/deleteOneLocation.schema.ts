import * as Yup from 'yup';
import { LocationWhereUniqueInputObjectSchema } from './internals'

export const LocationDeleteOneSchema = Yup.object({ where: LocationWhereUniqueInputObjectSchema  }).required()