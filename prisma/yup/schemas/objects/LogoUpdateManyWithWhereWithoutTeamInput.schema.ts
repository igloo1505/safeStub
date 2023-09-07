// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LogoScalarWhereInputObjectSchema } from '../internals';;
import { LogoUpdateManyMutationInputObjectSchema } from '../internals';;
import { LogoUncheckedUpdateManyWithoutLogosInputObjectSchema } from '../internals';

export const LogoUpdateManyWithWhereWithoutTeamInputObjectSchema = Yup.object({
    where: LogoScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([LogoUpdateManyMutationInputObjectSchema,
LogoUncheckedUpdateManyWithoutLogosInputObjectSchema])
});
