// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const PersonalDetailsUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.number(),  userId: Yup.number().required(),  name: LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema,  location: LocationUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema
});
