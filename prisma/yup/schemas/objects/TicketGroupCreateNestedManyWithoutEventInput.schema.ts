// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupCreateWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedCreateWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupCreateOrConnectWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupCreateManyEventInputEnvelopeObjectSchema } from '../internals';;
import { TicketGroupWhereUniqueInputObjectSchema } from '../internals';

export const TicketGroupCreateNestedManyWithoutEventInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TicketGroupCreateWithoutEventInputObjectSchema,
Yup.array().of(TicketGroupCreateWithoutEventInputObjectSchema),
TicketGroupUncheckedCreateWithoutEventInputObjectSchema,
Yup.array().of(TicketGroupUncheckedCreateWithoutEventInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TicketGroupCreateOrConnectWithoutEventInputObjectSchema,
Yup.array().of(TicketGroupCreateOrConnectWithoutEventInputObjectSchema)]),  createMany: TicketGroupCreateManyEventInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([TicketGroupWhereUniqueInputObjectSchema,
Yup.array().of(TicketGroupWhereUniqueInputObjectSchema)])
});
