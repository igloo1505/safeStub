// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithoutTagsInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutTagsInputObjectSchema } from '../internals';

export const EventUpdateWithWhereUniqueWithoutTagsInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([EventUpdateWithoutTagsInputObjectSchema,
EventUncheckedUpdateWithoutTagsInputObjectSchema])
});
