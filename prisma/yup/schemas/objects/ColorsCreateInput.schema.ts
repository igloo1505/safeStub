// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateNestedManyWithoutColorsInputObjectSchema } from '../internals';

export const ColorsCreateInputObjectSchema = Yup.object({
    primary: Yup.string().required(),  secondary: Yup.mixed().oneOfSchemas([Yup.string()]),  Team: TeamCreateNestedManyWithoutColorsInputObjectSchema
});
