// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaSectionCreateWithoutTicketInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema } from '../internals';

export const ArenaSectionCreateOrConnectWithoutTicketInputObjectSchema = Yup.object({
    where: ArenaSectionWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ArenaSectionCreateWithoutTicketInputObjectSchema,
ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema])
});
