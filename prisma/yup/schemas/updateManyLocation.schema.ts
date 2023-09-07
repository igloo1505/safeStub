import * as Yup from 'yup';
import { LocationUpdateManyMutationInputObjectSchema, LocationWhereInputObjectSchema } from './internals'

export const LocationUpdateManySchema = Yup.object({ data: LocationUpdateManyMutationInputObjectSchema, where: LocationWhereInputObjectSchema  }).required()