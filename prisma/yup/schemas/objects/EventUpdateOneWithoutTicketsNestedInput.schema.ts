// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutTicketsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutTicketsInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutTicketsInputObjectSchema } from '../internals';;
import { EventUpsertWithoutTicketsInputObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithoutTicketsInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutTicketsInputObjectSchema } from '../internals';

export const EventUpdateOneWithoutTicketsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutTicketsInputObjectSchema,
EventUncheckedCreateWithoutTicketsInputObjectSchema]),  connectOrCreate: EventCreateOrConnectWithoutTicketsInputObjectSchema,  upsert: EventUpsertWithoutTicketsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: EventWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([EventUpdateWithoutTicketsInputObjectSchema,
EventUncheckedUpdateWithoutTicketsInputObjectSchema])
});
