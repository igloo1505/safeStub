// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereInputObjectSchema } from '../internals';

export const EventRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([EventWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([EventWhereInputObjectSchema])
});
