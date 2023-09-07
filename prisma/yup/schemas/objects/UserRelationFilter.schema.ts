// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereInputObjectSchema } from '../internals';

export const UserRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([UserWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([UserWhereInputObjectSchema])
});
