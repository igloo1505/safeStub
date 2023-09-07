// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketWhereUniqueInputObjectSchema } from '../internals';;
import { TicketUpdateWithoutArenaSectionInputObjectSchema } from '../internals';;
import { TicketUncheckedUpdateWithoutArenaSectionInputObjectSchema } from '../internals';

export const TicketUpdateWithWhereUniqueWithoutArenaSectionInputObjectSchema = Yup.object({
    where: TicketWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TicketUpdateWithoutArenaSectionInputObjectSchema,
TicketUncheckedUpdateWithoutArenaSectionInputObjectSchema])
});
