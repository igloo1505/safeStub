// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateOneRequiredWithoutPersonalDetailsNestedInputObjectSchema } from '../internals';;
import { LocationUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from '../internals';

export const PersonalDetailsUpdateWithoutNameInputObjectSchema = Yup.object({
    user: UserUpdateOneRequiredWithoutPersonalDetailsNestedInputObjectSchema,  location: LocationUpdateOneWithoutPersonalDetailsNestedInputObjectSchema
});
