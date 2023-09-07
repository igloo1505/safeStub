// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamCreateWithoutLogosInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutLogosInputObjectSchema } from '../internals';

export const TeamCreateOrConnectWithoutLogosInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutLogosInputObjectSchema,
TeamUncheckedCreateWithoutLogosInputObjectSchema])
});
