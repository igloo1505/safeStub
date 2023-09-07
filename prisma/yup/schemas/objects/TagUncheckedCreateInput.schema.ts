// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from '../internals';

export const TagUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.number(),  value: Yup.string().required(),  Event: EventUncheckedCreateNestedManyWithoutTagsInputObjectSchema
});
