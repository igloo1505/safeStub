// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { EventCreateWithoutArenaInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';

export const EventUpsertWithWhereUniqueWithoutArenaInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([EventUpdateWithoutArenaInputObjectSchema,
EventUncheckedUpdateWithoutArenaInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([EventCreateWithoutArenaInputObjectSchema,
EventUncheckedCreateWithoutArenaInputObjectSchema])
});
