// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketCreateWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketUncheckedCreateWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketCreateOrConnectWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketCreateManyArenaSectionInputEnvelopeObjectSchema } from '../internals';;
import { TicketWhereUniqueInputObjectSchema } from '../internals';

export const TicketUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TicketCreateWithoutArenaSectionInputObjectSchema,
Yup.array().of(TicketCreateWithoutArenaSectionInputObjectSchema),
TicketUncheckedCreateWithoutArenaSectionInputObjectSchema,
Yup.array().of(TicketUncheckedCreateWithoutArenaSectionInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TicketCreateOrConnectWithoutArenaSectionInputObjectSchema,
Yup.array().of(TicketCreateOrConnectWithoutArenaSectionInputObjectSchema)]),  createMany: TicketCreateManyArenaSectionInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)])
});
