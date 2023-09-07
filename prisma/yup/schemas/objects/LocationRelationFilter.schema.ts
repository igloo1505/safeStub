// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationWhereInputObjectSchema } from '../internals';

export const LocationRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([LocationWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([LocationWhereInputObjectSchema])
});
