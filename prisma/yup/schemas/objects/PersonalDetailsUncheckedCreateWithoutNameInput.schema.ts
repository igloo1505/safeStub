// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema = Yup.object({
    id: Yup.number(),  userId: Yup.number().required(),  location: LocationUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema
});
