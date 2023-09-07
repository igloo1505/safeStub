// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateOneRequiredWithoutPersonalDetailsNestedInputObjectSchema } from '../internals';;
import { LegalNameUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from '../internals';;
import { LocationUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from '../internals';

export const PersonalDetailsUpdateInputObjectSchema = Yup.object({
    user: UserUpdateOneRequiredWithoutPersonalDetailsNestedInputObjectSchema,  name: LegalNameUpdateOneWithoutPersonalDetailsNestedInputObjectSchema,  location: LocationUpdateOneWithoutPersonalDetailsNestedInputObjectSchema
});
