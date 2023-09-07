// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateOneRequiredWithoutPersonalDetailsNestedInputObjectSchema } from '../internals';;
import { LegalNameUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from '../internals';

export const PersonalDetailsUpdateWithoutLocationInputObjectSchema = Yup.object({
    user: UserUpdateOneRequiredWithoutPersonalDetailsNestedInputObjectSchema,  name: LegalNameUpdateOneWithoutPersonalDetailsNestedInputObjectSchema
});
