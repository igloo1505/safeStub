// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema = Yup.object({
    id: Yup.number(),  name: LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema,  location: LocationUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema
});
