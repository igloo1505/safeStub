// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutTagsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutTagsInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutTagsInputObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';

export const EventCreateNestedManyWithoutTagsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutTagsInputObjectSchema,
Yup.array().of(EventCreateWithoutTagsInputObjectSchema),
EventUncheckedCreateWithoutTagsInputObjectSchema,
Yup.array().of(EventUncheckedCreateWithoutTagsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([EventCreateOrConnectWithoutTagsInputObjectSchema,
Yup.array().of(EventCreateOrConnectWithoutTagsInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)])
});
