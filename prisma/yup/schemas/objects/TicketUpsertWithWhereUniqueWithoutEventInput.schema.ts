// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketWhereUniqueInputObjectSchema } from '../internals';;
import { TicketUpdateWithoutEventInputObjectSchema } from '../internals';;
import { TicketUncheckedUpdateWithoutEventInputObjectSchema } from '../internals';;
import { TicketCreateWithoutEventInputObjectSchema } from '../internals';;
import { TicketUncheckedCreateWithoutEventInputObjectSchema } from '../internals';

export const TicketUpsertWithWhereUniqueWithoutEventInputObjectSchema = Yup.object({
    where: TicketWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TicketUpdateWithoutEventInputObjectSchema,
TicketUncheckedUpdateWithoutEventInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TicketCreateWithoutEventInputObjectSchema,
TicketUncheckedCreateWithoutEventInputObjectSchema])
});
