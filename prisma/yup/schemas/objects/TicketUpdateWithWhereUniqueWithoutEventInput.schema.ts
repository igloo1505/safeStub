// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketWhereUniqueInputObjectSchema } from '../internals';;
import { TicketUpdateWithoutEventInputObjectSchema } from '../internals';;
import { TicketUncheckedUpdateWithoutEventInputObjectSchema } from '../internals';

export const TicketUpdateWithWhereUniqueWithoutEventInputObjectSchema = Yup.object({
    where: TicketWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TicketUpdateWithoutEventInputObjectSchema,
TicketUncheckedUpdateWithoutEventInputObjectSchema])
});
