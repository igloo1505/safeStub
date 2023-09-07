// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaSectionCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';

export const ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema = Yup.object({
    where: ArenaSectionWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ArenaSectionCreateWithoutArenaInputObjectSchema,
ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema])
});
