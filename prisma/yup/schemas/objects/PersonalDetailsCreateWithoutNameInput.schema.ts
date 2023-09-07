// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const PersonalDetailsCreateWithoutNameInputObjectSchema = Yup.object({
    user: UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema,  location: LocationCreateNestedOneWithoutPersonalDetailsInputObjectSchema
});
