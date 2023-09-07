// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupCreateWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedCreateWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupCreateOrConnectWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupUpsertWithWhereUniqueWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupCreateManyEventInputEnvelopeObjectSchema } from '../internals';;
import { TicketGroupWhereUniqueInputObjectSchema } from '../internals';;
import { TicketGroupUpdateWithWhereUniqueWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupUpdateManyWithWhereWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupScalarWhereInputObjectSchema } from '../internals';

export const TicketGroupUncheckedUpdateManyWithoutEventNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TicketGroupCreateWithoutEventInputObjectSchema,
Yup.array().of(TicketGroupCreateWithoutEventInputObjectSchema),
TicketGroupUncheckedCreateWithoutEventInputObjectSchema,
Yup.array().of(TicketGroupUncheckedCreateWithoutEventInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TicketGroupCreateOrConnectWithoutEventInputObjectSchema,
Yup.array().of(TicketGroupCreateOrConnectWithoutEventInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TicketGroupUpsertWithWhereUniqueWithoutEventInputObjectSchema,
Yup.array().of(TicketGroupUpsertWithWhereUniqueWithoutEventInputObjectSchema)]),  createMany: TicketGroupCreateManyEventInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([TicketGroupWhereUniqueInputObjectSchema,
Yup.array().of(TicketGroupWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TicketGroupWhereUniqueInputObjectSchema,
Yup.array().of(TicketGroupWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TicketGroupWhereUniqueInputObjectSchema,
Yup.array().of(TicketGroupWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TicketGroupWhereUniqueInputObjectSchema,
Yup.array().of(TicketGroupWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TicketGroupUpdateWithWhereUniqueWithoutEventInputObjectSchema,
Yup.array().of(TicketGroupUpdateWithWhereUniqueWithoutEventInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TicketGroupUpdateManyWithWhereWithoutEventInputObjectSchema,
Yup.array().of(TicketGroupUpdateManyWithWhereWithoutEventInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TicketGroupScalarWhereInputObjectSchema,
Yup.array().of(TicketGroupScalarWhereInputObjectSchema)])
});
