// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereInputObjectSchema } from '../internals';

export const UserListRelationFilterObjectSchema = Yup.object({
    every: UserWhereInputObjectSchema,  some: UserWhereInputObjectSchema,  none: UserWhereInputObjectSchema
});
