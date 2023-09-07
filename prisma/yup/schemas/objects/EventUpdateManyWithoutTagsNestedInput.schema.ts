// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutTagsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutTagsInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutTagsInputObjectSchema } from '../internals';;
import { EventUpsertWithWhereUniqueWithoutTagsInputObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithWhereUniqueWithoutTagsInputObjectSchema } from '../internals';;
import { EventUpdateManyWithWhereWithoutTagsInputObjectSchema } from '../internals';;
import { EventScalarWhereInputObjectSchema } from '../internals';

export const EventUpdateManyWithoutTagsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutTagsInputObjectSchema,
Yup.array().of(EventCreateWithoutTagsInputObjectSchema),
EventUncheckedCreateWithoutTagsInputObjectSchema,
Yup.array().of(EventUncheckedCreateWithoutTagsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([EventCreateOrConnectWithoutTagsInputObjectSchema,
Yup.array().of(EventCreateOrConnectWithoutTagsInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([EventUpsertWithWhereUniqueWithoutTagsInputObjectSchema,
Yup.array().of(EventUpsertWithWhereUniqueWithoutTagsInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([EventUpdateWithWhereUniqueWithoutTagsInputObjectSchema,
Yup.array().of(EventUpdateWithWhereUniqueWithoutTagsInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([EventUpdateManyWithWhereWithoutTagsInputObjectSchema,
Yup.array().of(EventUpdateManyWithWhereWithoutTagsInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([EventScalarWhereInputObjectSchema,
Yup.array().of(EventScalarWhereInputObjectSchema)])
});
