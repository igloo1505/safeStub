// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamUncheckedCreateNestedManyWithoutColorsInputObjectSchema } from '../internals';

export const ColorsUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.number(),  primary: Yup.string().required(),  secondary: Yup.mixed().oneOfSchemas([Yup.string()]),  Team: TeamUncheckedCreateNestedManyWithoutColorsInputObjectSchema
});
