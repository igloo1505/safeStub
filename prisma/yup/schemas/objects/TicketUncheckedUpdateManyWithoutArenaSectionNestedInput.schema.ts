// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketCreateWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketUncheckedCreateWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketCreateOrConnectWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketUpsertWithWhereUniqueWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketCreateManyArenaSectionInputEnvelopeObjectSchema } from '../internals';;
import { TicketWhereUniqueInputObjectSchema } from '../internals';;
import { TicketUpdateWithWhereUniqueWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketUpdateManyWithWhereWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketScalarWhereInputObjectSchema } from '../internals';

export const TicketUncheckedUpdateManyWithoutArenaSectionNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TicketCreateWithoutArenaSectionInputObjectSchema,
Yup.array().of(TicketCreateWithoutArenaSectionInputObjectSchema),
TicketUncheckedCreateWithoutArenaSectionInputObjectSchema,
Yup.array().of(TicketUncheckedCreateWithoutArenaSectionInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TicketCreateOrConnectWithoutArenaSectionInputObjectSchema,
Yup.array().of(TicketCreateOrConnectWithoutArenaSectionInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TicketUpsertWithWhereUniqueWithoutArenaSectionInputObjectSchema,
Yup.array().of(TicketUpsertWithWhereUniqueWithoutArenaSectionInputObjectSchema)]),  createMany: TicketCreateManyArenaSectionInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TicketUpdateWithWhereUniqueWithoutArenaSectionInputObjectSchema,
Yup.array().of(TicketUpdateWithWhereUniqueWithoutArenaSectionInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TicketUpdateManyWithWhereWithoutArenaSectionInputObjectSchema,
Yup.array().of(TicketUpdateManyWithWhereWithoutArenaSectionInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TicketScalarWhereInputObjectSchema,
Yup.array().of(TicketScalarWhereInputObjectSchema)])
});
