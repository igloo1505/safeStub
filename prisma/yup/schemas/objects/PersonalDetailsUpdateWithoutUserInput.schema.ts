// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LegalNameUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from '../internals';;
import { LocationUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from '../internals';

export const PersonalDetailsUpdateWithoutUserInputObjectSchema = Yup.object({
    name: LegalNameUpdateOneWithoutPersonalDetailsNestedInputObjectSchema,  location: LocationUpdateOneWithoutPersonalDetailsNestedInputObjectSchema
});
