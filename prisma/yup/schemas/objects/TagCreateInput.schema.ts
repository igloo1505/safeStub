// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateNestedManyWithoutTagsInputObjectSchema } from '../internals';

export const TagCreateInputObjectSchema = Yup.object({
    value: Yup.string().required(),  Event: EventCreateNestedManyWithoutTagsInputObjectSchema
});
