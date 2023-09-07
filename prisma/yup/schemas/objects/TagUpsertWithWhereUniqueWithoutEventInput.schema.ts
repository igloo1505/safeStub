// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TagWhereUniqueInputObjectSchema } from '../internals';;
import { TagUpdateWithoutEventInputObjectSchema } from '../internals';;
import { TagUncheckedUpdateWithoutEventInputObjectSchema } from '../internals';;
import { TagCreateWithoutEventInputObjectSchema } from '../internals';;
import { TagUncheckedCreateWithoutEventInputObjectSchema } from '../internals';

export const TagUpsertWithWhereUniqueWithoutEventInputObjectSchema = Yup.object({
    where: TagWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TagUpdateWithoutEventInputObjectSchema,
TagUncheckedUpdateWithoutEventInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TagCreateWithoutEventInputObjectSchema,
TagUncheckedCreateWithoutEventInputObjectSchema])
});
