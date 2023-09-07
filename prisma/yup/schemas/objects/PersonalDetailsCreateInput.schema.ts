// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const PersonalDetailsCreateInputObjectSchema = Yup.object({
    user: UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema,  name: LegalNameCreateNestedOneWithoutPersonalDetailsInputObjectSchema,  location: LocationCreateNestedOneWithoutPersonalDetailsInputObjectSchema
});
