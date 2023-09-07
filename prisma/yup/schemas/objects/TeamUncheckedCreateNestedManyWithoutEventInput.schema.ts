// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutEventInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutEventInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutEventInputObjectSchema } from '../internals';;
import { TeamCreateManyEventInputEnvelopeObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';

export const TeamUncheckedCreateNestedManyWithoutEventInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutEventInputObjectSchema,
Yup.array().of(TeamCreateWithoutEventInputObjectSchema),
TeamUncheckedCreateWithoutEventInputObjectSchema,
Yup.array().of(TeamUncheckedCreateWithoutEventInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TeamCreateOrConnectWithoutEventInputObjectSchema,
Yup.array().of(TeamCreateOrConnectWithoutEventInputObjectSchema)]),  createMany: TeamCreateManyEventInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)])
});
