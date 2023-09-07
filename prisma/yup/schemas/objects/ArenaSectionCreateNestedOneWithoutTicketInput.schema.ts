// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionCreateWithoutTicketInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema } from '../internals';;
import { ArenaSectionCreateOrConnectWithoutTicketInputObjectSchema } from '../internals';;
import { ArenaSectionWhereUniqueInputObjectSchema } from '../internals';

export const ArenaSectionCreateNestedOneWithoutTicketInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaSectionCreateWithoutTicketInputObjectSchema,
ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema]),  connectOrCreate: ArenaSectionCreateOrConnectWithoutTicketInputObjectSchema,  connect: ArenaSectionWhereUniqueInputObjectSchema
});
