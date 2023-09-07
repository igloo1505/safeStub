// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketCreateWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketUncheckedCreateWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketCreateOrConnectWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketUpsertWithWhereUniqueWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketCreateManyTicketGroupInputEnvelopeObjectSchema } from '../internals';;
import { TicketWhereUniqueInputObjectSchema } from '../internals';;
import { TicketUpdateWithWhereUniqueWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketUpdateManyWithWhereWithoutTicketGroupInputObjectSchema } from '../internals';;
import { TicketScalarWhereInputObjectSchema } from '../internals';

export const TicketUncheckedUpdateManyWithoutTicketGroupNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TicketCreateWithoutTicketGroupInputObjectSchema,
Yup.array().of(TicketCreateWithoutTicketGroupInputObjectSchema),
TicketUncheckedCreateWithoutTicketGroupInputObjectSchema,
Yup.array().of(TicketUncheckedCreateWithoutTicketGroupInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TicketCreateOrConnectWithoutTicketGroupInputObjectSchema,
Yup.array().of(TicketCreateOrConnectWithoutTicketGroupInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TicketUpsertWithWhereUniqueWithoutTicketGroupInputObjectSchema,
Yup.array().of(TicketUpsertWithWhereUniqueWithoutTicketGroupInputObjectSchema)]),  createMany: TicketCreateManyTicketGroupInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TicketUpdateWithWhereUniqueWithoutTicketGroupInputObjectSchema,
Yup.array().of(TicketUpdateWithWhereUniqueWithoutTicketGroupInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TicketUpdateManyWithWhereWithoutTicketGroupInputObjectSchema,
Yup.array().of(TicketUpdateManyWithWhereWithoutTicketGroupInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TicketScalarWhereInputObjectSchema,
Yup.array().of(TicketScalarWhereInputObjectSchema)])
});
