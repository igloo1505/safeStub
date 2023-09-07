// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ColorsCreateWithoutTeamInputObjectSchema } from '../internals';;
import { ColorsUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';;
import { ColorsCreateOrConnectWithoutTeamInputObjectSchema } from '../internals';;
import { ColorsUpsertWithoutTeamInputObjectSchema } from '../internals';;
import { ColorsWhereUniqueInputObjectSchema } from '../internals';;
import { ColorsUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { ColorsUncheckedUpdateWithoutTeamInputObjectSchema } from '../internals';

export const ColorsUpdateOneWithoutTeamNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ColorsCreateWithoutTeamInputObjectSchema,
ColorsUncheckedCreateWithoutTeamInputObjectSchema]),  connectOrCreate: ColorsCreateOrConnectWithoutTeamInputObjectSchema,  upsert: ColorsUpsertWithoutTeamInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: ColorsWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ColorsUpdateWithoutTeamInputObjectSchema,
ColorsUncheckedUpdateWithoutTeamInputObjectSchema])
});
