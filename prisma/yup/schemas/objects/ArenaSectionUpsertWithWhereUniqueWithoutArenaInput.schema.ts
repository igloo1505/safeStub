// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaSectionUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';

export const ArenaSectionUpsertWithWhereUniqueWithoutArenaInputObjectSchema = Yup.object({
    where: ArenaSectionWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ArenaSectionUpdateWithoutArenaInputObjectSchema,
ArenaSectionUncheckedUpdateWithoutArenaInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ArenaSectionCreateWithoutArenaInputObjectSchema,
ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema])
});
