// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketCreateWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketUncheckedCreateWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketCreateOrConnectWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketCreateManyTicketGroupInputEnvelopeObjectSchema } from '../internals';;
import { TicketWhereUniqueInputObjectSchema } from '../internals';

export const TicketCreateNestedManyWithoutTicketGroupInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TicketCreateWithoutTicketGroupInputObjectSchema,
Yup.array().of(TicketCreateWithoutTicketGroupInputObjectSchema),
TicketUncheckedCreateWithoutTicketGroupInputObjectSchema,
Yup.array().of(TicketUncheckedCreateWithoutTicketGroupInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TicketCreateOrConnectWithoutTicketGroupInputObjectSchema,
Yup.array().of(TicketCreateOrConnectWithoutTicketGroupInputObjectSchema)]),  createMany: TicketCreateManyTicketGroupInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)])
});
