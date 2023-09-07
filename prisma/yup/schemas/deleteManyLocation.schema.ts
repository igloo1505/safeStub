import * as Yup from 'yup';
import { LocationWhereInputObjectSchema } from './internals'

export const LocationDeleteManySchema = Yup.object({ LocationWhereInputObjectSchema  }).required()