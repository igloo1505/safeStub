// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EventUpdateManyWithoutTagsNestedInputObjectSchema } from '../internals';

export const TagUpdateInputObjectSchema = Yup.object({
    value: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  Event: EventUpdateManyWithoutTagsNestedInputObjectSchema
});
