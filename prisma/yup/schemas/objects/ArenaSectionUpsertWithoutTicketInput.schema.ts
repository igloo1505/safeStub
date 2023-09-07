// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionUpdateWithoutTicketInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedUpdateWithoutTicketInputObjectSchema } from '../internals';;
import { ArenaSectionCreateWithoutTicketInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema } from '../internals';

export const ArenaSectionUpsertWithoutTicketInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([ArenaSectionUpdateWithoutTicketInputObjectSchema,
ArenaSectionUncheckedUpdateWithoutTicketInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ArenaSectionCreateWithoutTicketInputObjectSchema,
ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema])
});
