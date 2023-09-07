// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithoutTagsInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutTagsInputObjectSchema } from '../internals';;
import { EventCreateWithoutTagsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutTagsInputObjectSchema } from '../internals';

export const EventUpsertWithWhereUniqueWithoutTagsInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([EventUpdateWithoutTagsInputObjectSchema,
EventUncheckedUpdateWithoutTagsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([EventCreateWithoutTagsInputObjectSchema,
EventUncheckedCreateWithoutTagsInputObjectSchema])
});
