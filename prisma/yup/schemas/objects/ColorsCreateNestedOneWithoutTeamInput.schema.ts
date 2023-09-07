// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ColorsCreateWithoutTeamInputObjectSchema } from '../internals';;
import { ColorsUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';;
import { ColorsCreateOrConnectWithoutTeamInputObjectSchema } from '../internals';;
import { ColorsWhereUniqueInputObjectSchema } from '../internals';

export const ColorsCreateNestedOneWithoutTeamInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ColorsCreateWithoutTeamInputObjectSchema,
ColorsUncheckedCreateWithoutTeamInputObjectSchema]),  connectOrCreate: ColorsCreateOrConnectWithoutTeamInputObjectSchema,  connect: ColorsWhereUniqueInputObjectSchema
});
