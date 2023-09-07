// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const PersonalDetailsCreateWithoutLocationInputObjectSchema = Yup.object({
    user: UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema,  name: LegalNameCreateNestedOneWithoutPersonalDetailsInputObjectSchema
});
