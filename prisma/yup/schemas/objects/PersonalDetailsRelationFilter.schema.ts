// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsWhereInputObjectSchema } from '../internals';

export const PersonalDetailsRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([PersonalDetailsWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([PersonalDetailsWhereInputObjectSchema])
});
