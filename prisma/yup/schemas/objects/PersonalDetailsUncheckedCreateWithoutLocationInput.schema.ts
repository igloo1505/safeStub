// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema = Yup.object({
    id: Yup.number(),  userId: Yup.number().required(),  name: LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema
});
