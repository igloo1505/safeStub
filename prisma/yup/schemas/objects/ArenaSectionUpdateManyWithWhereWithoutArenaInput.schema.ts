// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionScalarWhereInputObjectSchema } from '../internals';;
import { ArenaSectionUpdateManyMutationInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedUpdateManyWithoutSectionsInputObjectSchema } from '../internals';

export const ArenaSectionUpdateManyWithWhereWithoutArenaInputObjectSchema = Yup.object({
    where: ArenaSectionScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ArenaSectionUpdateManyMutationInputObjectSchema,
ArenaSectionUncheckedUpdateManyWithoutSectionsInputObjectSchema])
});
