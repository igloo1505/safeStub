// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaSectionUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedUpdateWithoutArenaInputObjectSchema } from '../internals';

export const ArenaSectionUpdateWithWhereUniqueWithoutArenaInputObjectSchema = Yup.object({
    where: ArenaSectionWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ArenaSectionUpdateWithoutArenaInputObjectSchema,
ArenaSectionUncheckedUpdateWithoutArenaInputObjectSchema])
});
