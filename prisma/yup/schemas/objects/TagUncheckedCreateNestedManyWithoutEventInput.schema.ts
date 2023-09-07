// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TagCreateWithoutEventInputObjectSchema } from '../internals';;
import { TagUncheckedCreateWithoutEventInputObjectSchema } from '../internals';;
import { TagCreateOrConnectWithoutEventInputObjectSchema } from '../internals';;
import { TagWhereUniqueInputObjectSchema } from '../internals';

export const TagUncheckedCreateNestedManyWithoutEventInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TagCreateWithoutEventInputObjectSchema,
Yup.array().of(TagCreateWithoutEventInputObjectSchema),
TagUncheckedCreateWithoutEventInputObjectSchema,
Yup.array().of(TagUncheckedCreateWithoutEventInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TagCreateOrConnectWithoutEventInputObjectSchema,
Yup.array().of(TagCreateOrConnectWithoutEventInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TagWhereUniqueInputObjectSchema,
Yup.array().of(TagWhereUniqueInputObjectSchema)])
});
