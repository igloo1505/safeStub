// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from '../internals';

export const TagUncheckedUpdateInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  value: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  Event: EventUncheckedUpdateManyWithoutTagsNestedInputObjectSchema
});
