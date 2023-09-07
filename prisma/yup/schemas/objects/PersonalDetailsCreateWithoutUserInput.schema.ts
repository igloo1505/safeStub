// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LegalNameCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const PersonalDetailsCreateWithoutUserInputObjectSchema = Yup.object({
    name: LegalNameCreateNestedOneWithoutPersonalDetailsInputObjectSchema,  location: LocationCreateNestedOneWithoutPersonalDetailsInputObjectSchema
});
