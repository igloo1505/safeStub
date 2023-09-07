// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamCreateManyHomeArenaInputEnvelopeObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';

export const TeamUncheckedCreateNestedManyWithoutHomeArenaInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutHomeArenaInputObjectSchema,
Yup.array().of(TeamCreateWithoutHomeArenaInputObjectSchema),
TeamUncheckedCreateWithoutHomeArenaInputObjectSchema,
Yup.array().of(TeamUncheckedCreateWithoutHomeArenaInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TeamCreateOrConnectWithoutHomeArenaInputObjectSchema,
Yup.array().of(TeamCreateOrConnectWithoutHomeArenaInputObjectSchema)]),  createMany: TeamCreateManyHomeArenaInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)])
});
