// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { LegalNameUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from '../internals';;
import { LocationUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from '../internals';

export const PersonalDetailsUncheckedUpdateWithoutUserInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  name: LegalNameUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema,  location: LocationUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema
});
