// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TagWhereUniqueInputObjectSchema } from '../internals';;
import { TagCreateWithoutEventInputObjectSchema } from '../internals';;
import { TagUncheckedCreateWithoutEventInputObjectSchema } from '../internals';

export const TagCreateOrConnectWithoutEventInputObjectSchema = Yup.object({
    where: TagWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TagCreateWithoutEventInputObjectSchema,
TagUncheckedCreateWithoutEventInputObjectSchema])
});
