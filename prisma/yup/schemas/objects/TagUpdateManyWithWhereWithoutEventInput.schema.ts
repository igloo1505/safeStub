// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TagScalarWhereInputObjectSchema } from '../internals';;
import { TagUpdateManyMutationInputObjectSchema } from '../internals';;
import { TagUncheckedUpdateManyWithoutTagsInputObjectSchema } from '../internals';

export const TagUpdateManyWithWhereWithoutEventInputObjectSchema = Yup.object({
    where: TagScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TagUpdateManyMutationInputObjectSchema,
TagUncheckedUpdateManyWithoutTagsInputObjectSchema])
});
