// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutTicketsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutTicketsInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutTicketsInputObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';

export const EventCreateNestedOneWithoutTicketsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutTicketsInputObjectSchema,
EventUncheckedCreateWithoutTicketsInputObjectSchema]),  connectOrCreate: EventCreateOrConnectWithoutTicketsInputObjectSchema,  connect: EventWhereUniqueInputObjectSchema
});
