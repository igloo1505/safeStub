// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutEventInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutEventInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutEventInputObjectSchema } from '../internals';;
import { TeamUpsertWithWhereUniqueWithoutEventInputObjectSchema } from '../internals';;
import { TeamCreateManyEventInputEnvelopeObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithWhereUniqueWithoutEventInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithWhereWithoutEventInputObjectSchema } from '../internals';;
import { TeamScalarWhereInputObjectSchema } from '../internals';

export const TeamUncheckedUpdateManyWithoutEventNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutEventInputObjectSchema,
Yup.array().of(TeamCreateWithoutEventInputObjectSchema),
TeamUncheckedCreateWithoutEventInputObjectSchema,
Yup.array().of(TeamUncheckedCreateWithoutEventInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TeamCreateOrConnectWithoutEventInputObjectSchema,
Yup.array().of(TeamCreateOrConnectWithoutEventInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TeamUpsertWithWhereUniqueWithoutEventInputObjectSchema,
Yup.array().of(TeamUpsertWithWhereUniqueWithoutEventInputObjectSchema)]),  createMany: TeamCreateManyEventInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TeamUpdateWithWhereUniqueWithoutEventInputObjectSchema,
Yup.array().of(TeamUpdateWithWhereUniqueWithoutEventInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TeamUpdateManyWithWhereWithoutEventInputObjectSchema,
Yup.array().of(TeamUpdateManyWithWhereWithoutEventInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TeamScalarWhereInputObjectSchema,
Yup.array().of(TeamScalarWhereInputObjectSchema)])
});
