// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsCreateNestedOneWithoutNameInputObjectSchema } from '../internals';

export const LegalNameCreateInputObjectSchema = Yup.object({
    first: Yup.string().required(),  middle: Yup.mixed().oneOfSchemas([Yup.string()]),  last: Yup.string().required(),  personalDetails: PersonalDetailsCreateNestedOneWithoutNameInputObjectSchema
});
