// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventCreateWithoutArenaInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';

export const EventCreateOrConnectWithoutArenaInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([EventCreateWithoutArenaInputObjectSchema,
EventUncheckedCreateWithoutArenaInputObjectSchema])
});
