// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutArenaInputObjectSchema } from '../internals';

export const EventUpdateWithWhereUniqueWithoutArenaInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([EventUpdateWithoutArenaInputObjectSchema,
EventUncheckedUpdateWithoutArenaInputObjectSchema])
});
