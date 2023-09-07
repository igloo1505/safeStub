// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TagWhereUniqueInputObjectSchema } from '../internals';;
import { TagUpdateWithoutEventInputObjectSchema } from '../internals';;
import { TagUncheckedUpdateWithoutEventInputObjectSchema } from '../internals';

export const TagUpdateWithWhereUniqueWithoutEventInputObjectSchema = Yup.object({
    where: TagWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TagUpdateWithoutEventInputObjectSchema,
TagUncheckedUpdateWithoutEventInputObjectSchema])
});
