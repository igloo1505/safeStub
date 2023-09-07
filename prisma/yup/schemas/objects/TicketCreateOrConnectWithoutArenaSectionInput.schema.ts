// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketWhereUniqueInputObjectSchema } from '../internals';;
import { TicketCreateWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketUncheckedCreateWithoutArenaSectionInputObjectSchema } from '../internals';

export const TicketCreateOrConnectWithoutArenaSectionInputObjectSchema = Yup.object({
    where: TicketWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TicketCreateWithoutArenaSectionInputObjectSchema,
TicketUncheckedCreateWithoutArenaSectionInputObjectSchema])
});
