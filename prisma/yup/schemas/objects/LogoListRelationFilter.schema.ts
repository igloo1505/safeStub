// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LogoWhereInputObjectSchema } from '../internals';

export const LogoListRelationFilterObjectSchema = Yup.object({
    every: LogoWhereInputObjectSchema,  some: LogoWhereInputObjectSchema,  none: LogoWhereInputObjectSchema
});
