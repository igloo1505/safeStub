// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TagCreateWithoutEventInputObjectSchema } from '../internals';;
import { TagUncheckedCreateWithoutEventInputObjectSchema } from '../internals';;
import { TagCreateOrConnectWithoutEventInputObjectSchema } from '../internals';;
import { TagUpsertWithWhereUniqueWithoutEventInputObjectSchema } from '../internals';;
import { TagWhereUniqueInputObjectSchema } from '../internals';;
import { TagUpdateWithWhereUniqueWithoutEventInputObjectSchema } from '../internals';;
import { TagUpdateManyWithWhereWithoutEventInputObjectSchema } from '../internals';;
import { TagScalarWhereInputObjectSchema } from '../internals';

export const TagUpdateManyWithoutEventNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TagCreateWithoutEventInputObjectSchema,
Yup.array().of(TagCreateWithoutEventInputObjectSchema),
TagUncheckedCreateWithoutEventInputObjectSchema,
Yup.array().of(TagUncheckedCreateWithoutEventInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TagCreateOrConnectWithoutEventInputObjectSchema,
Yup.array().of(TagCreateOrConnectWithoutEventInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TagUpsertWithWhereUniqueWithoutEventInputObjectSchema,
Yup.array().of(TagUpsertWithWhereUniqueWithoutEventInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([TagWhereUniqueInputObjectSchema,
Yup.array().of(TagWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TagWhereUniqueInputObjectSchema,
Yup.array().of(TagWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TagWhereUniqueInputObjectSchema,
Yup.array().of(TagWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TagWhereUniqueInputObjectSchema,
Yup.array().of(TagWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TagUpdateWithWhereUniqueWithoutEventInputObjectSchema,
Yup.array().of(TagUpdateWithWhereUniqueWithoutEventInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TagUpdateManyWithWhereWithoutEventInputObjectSchema,
Yup.array().of(TagUpdateManyWithWhereWithoutEventInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TagScalarWhereInputObjectSchema,
Yup.array().of(TagScalarWhereInputObjectSchema)])
});
