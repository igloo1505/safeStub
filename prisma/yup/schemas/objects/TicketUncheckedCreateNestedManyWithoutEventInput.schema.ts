// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketCreateWithoutEventInputObjectSchema } from '../internals';;
import { TicketUncheckedCreateWithoutEventInputObjectSchema } from '../internals';;
import { TicketCreateOrConnectWithoutEventInputObjectSchema } from '../internals';;
import { TicketCreateManyEventInputEnvelopeObjectSchema } from '../internals';;
import { TicketWhereUniqueInputObjectSchema } from '../internals';

export const TicketUncheckedCreateNestedManyWithoutEventInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TicketCreateWithoutEventInputObjectSchema,
Yup.array().of(TicketCreateWithoutEventInputObjectSchema),
TicketUncheckedCreateWithoutEventInputObjectSchema,
Yup.array().of(TicketUncheckedCreateWithoutEventInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TicketCreateOrConnectWithoutEventInputObjectSchema,
Yup.array().of(TicketCreateOrConnectWithoutEventInputObjectSchema)]),  createMany: TicketCreateManyEventInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)])
});
