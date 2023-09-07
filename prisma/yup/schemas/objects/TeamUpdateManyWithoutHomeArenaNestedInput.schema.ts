// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamUpsertWithWhereUniqueWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamCreateManyHomeArenaInputEnvelopeObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithWhereUniqueWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithWhereWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamScalarWhereInputObjectSchema } from '../internals';

export const TeamUpdateManyWithoutHomeArenaNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutHomeArenaInputObjectSchema,
Yup.array().of(TeamCreateWithoutHomeArenaInputObjectSchema),
TeamUncheckedCreateWithoutHomeArenaInputObjectSchema,
Yup.array().of(TeamUncheckedCreateWithoutHomeArenaInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TeamCreateOrConnectWithoutHomeArenaInputObjectSchema,
Yup.array().of(TeamCreateOrConnectWithoutHomeArenaInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TeamUpsertWithWhereUniqueWithoutHomeArenaInputObjectSchema,
Yup.array().of(TeamUpsertWithWhereUniqueWithoutHomeArenaInputObjectSchema)]),  createMany: TeamCreateManyHomeArenaInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TeamUpdateWithWhereUniqueWithoutHomeArenaInputObjectSchema,
Yup.array().of(TeamUpdateWithWhereUniqueWithoutHomeArenaInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TeamUpdateManyWithWhereWithoutHomeArenaInputObjectSchema,
Yup.array().of(TeamUpdateManyWithWhereWithoutHomeArenaInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TeamScalarWhereInputObjectSchema,
Yup.array().of(TeamScalarWhereInputObjectSchema)])
});
