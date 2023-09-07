// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutLogosInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutLogosInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutLogosInputObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';

export const TeamCreateNestedOneWithoutLogosInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutLogosInputObjectSchema,
TeamUncheckedCreateWithoutLogosInputObjectSchema]),  connectOrCreate: TeamCreateOrConnectWithoutLogosInputObjectSchema,  connect: TeamWhereUniqueInputObjectSchema
});
