import * as Yup from 'yup';
import { LocationCreateInputObjectSchema } from './internals'

export const LocationCreateSchema = Yup.object({ data: LocationCreateInputObjectSchema  }).required()