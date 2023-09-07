// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketCreateWithoutEventInputObjectSchema } from '../internals';;
import { TicketUncheckedCreateWithoutEventInputObjectSchema } from '../internals';;
import { TicketCreateOrConnectWithoutEventInputObjectSchema } from '../internals';;
import { TicketUpsertWithWhereUniqueWithoutEventInputObjectSchema } from '../internals';;
import { TicketCreateManyEventInputEnvelopeObjectSchema } from '../internals';;
import { TicketWhereUniqueInputObjectSchema } from '../internals';;
import { TicketUpdateWithWhereUniqueWithoutEventInputObjectSchema } from '../internals';;
import { TicketUpdateManyWithWhereWithoutEventInputObjectSchema } from '../internals';;
import { TicketScalarWhereInputObjectSchema } from '../internals';

export const TicketUpdateManyWithoutEventNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TicketCreateWithoutEventInputObjectSchema,
Yup.array().of(TicketCreateWithoutEventInputObjectSchema),
TicketUncheckedCreateWithoutEventInputObjectSchema,
Yup.array().of(TicketUncheckedCreateWithoutEventInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TicketCreateOrConnectWithoutEventInputObjectSchema,
Yup.array().of(TicketCreateOrConnectWithoutEventInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TicketUpsertWithWhereUniqueWithoutEventInputObjectSchema,
Yup.array().of(TicketUpsertWithWhereUniqueWithoutEventInputObjectSchema)]),  createMany: TicketCreateManyEventInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TicketWhereUniqueInputObjectSchema,
Yup.array().of(TicketWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TicketUpdateWithWhereUniqueWithoutEventInputObjectSchema,
Yup.array().of(TicketUpdateWithWhereUniqueWithoutEventInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TicketUpdateManyWithWhereWithoutEventInputObjectSchema,
Yup.array().of(TicketUpdateManyWithWhereWithoutEventInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TicketScalarWhereInputObjectSchema,
Yup.array().of(TicketScalarWhereInputObjectSchema)])
});
