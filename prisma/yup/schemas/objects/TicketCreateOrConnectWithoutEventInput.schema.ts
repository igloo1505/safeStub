// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketWhereUniqueInputObjectSchema } from '../internals';;
import { TicketCreateWithoutEventInputObjectSchema } from '../internals';;
import { TicketUncheckedCreateWithoutEventInputObjectSchema } from '../internals';

export const TicketCreateOrConnectWithoutEventInputObjectSchema = Yup.object({
    where: TicketWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TicketCreateWithoutEventInputObjectSchema,
TicketUncheckedCreateWithoutEventInputObjectSchema])
});
