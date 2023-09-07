// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventCreateWithoutTagsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutTagsInputObjectSchema } from '../internals';

export const EventCreateOrConnectWithoutTagsInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([EventCreateWithoutTagsInputObjectSchema,
EventUncheckedCreateWithoutTagsInputObjectSchema])
});
