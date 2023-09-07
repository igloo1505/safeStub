// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketWhereUniqueInputObjectSchema } from '../internals';;
import { TicketUpdateWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketUncheckedUpdateWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketCreateWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketUncheckedCreateWithoutArenaSectionInputObjectSchema } from '../internals';

export const TicketUpsertWithWhereUniqueWithoutArenaSectionInputObjectSchema = Yup.object({
    where: TicketWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TicketUpdateWithoutArenaSectionInputObjectSchema,
TicketUncheckedUpdateWithoutArenaSectionInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TicketCreateWithoutArenaSectionInputObjectSchema,
TicketUncheckedCreateWithoutArenaSectionInputObjectSchema])
});
