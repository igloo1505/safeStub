// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamCreateWithoutEventInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutEventInputObjectSchema } from '../internals';

export const TeamCreateOrConnectWithoutEventInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutEventInputObjectSchema,
TeamUncheckedCreateWithoutEventInputObjectSchema])
});
