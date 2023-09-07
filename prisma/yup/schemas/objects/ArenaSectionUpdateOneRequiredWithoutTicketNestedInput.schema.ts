// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionCreateWithoutTicketInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema } from '../internals';;
import { ArenaSectionCreateOrConnectWithoutTicketInputObjectSchema } from '../internals';;
import { ArenaSectionUpsertWithoutTicketInputObjectSchema } from '../internals';;
import { ArenaSectionWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaSectionUpdateWithoutTicketInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedUpdateWithoutTicketInputObjectSchema } from '../internals';

export const ArenaSectionUpdateOneRequiredWithoutTicketNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaSectionCreateWithoutTicketInputObjectSchema,
ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema]),  connectOrCreate: ArenaSectionCreateOrConnectWithoutTicketInputObjectSchema,  upsert: ArenaSectionUpsertWithoutTicketInputObjectSchema,  connect: ArenaSectionWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ArenaSectionUpdateWithoutTicketInputObjectSchema,
ArenaSectionUncheckedUpdateWithoutTicketInputObjectSchema])
});
