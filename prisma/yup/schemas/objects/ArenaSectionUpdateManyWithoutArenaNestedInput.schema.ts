// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionUpsertWithWhereUniqueWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionCreateManyArenaInputEnvelopeObjectSchema } from '../internals';;
import { ArenaSectionWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaSectionUpdateWithWhereUniqueWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionUpdateManyWithWhereWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionScalarWhereInputObjectSchema } from '../internals';

export const ArenaSectionUpdateManyWithoutArenaNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaSectionCreateWithoutArenaInputObjectSchema,
Yup.array().of(ArenaSectionCreateWithoutArenaInputObjectSchema),
ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema,
Yup.array().of(ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema,
Yup.array().of(ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([ArenaSectionUpsertWithWhereUniqueWithoutArenaInputObjectSchema,
Yup.array().of(ArenaSectionUpsertWithWhereUniqueWithoutArenaInputObjectSchema)]),  createMany: ArenaSectionCreateManyArenaInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([ArenaSectionWhereUniqueInputObjectSchema,
Yup.array().of(ArenaSectionWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([ArenaSectionWhereUniqueInputObjectSchema,
Yup.array().of(ArenaSectionWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([ArenaSectionWhereUniqueInputObjectSchema,
Yup.array().of(ArenaSectionWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([ArenaSectionWhereUniqueInputObjectSchema,
Yup.array().of(ArenaSectionWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([ArenaSectionUpdateWithWhereUniqueWithoutArenaInputObjectSchema,
Yup.array().of(ArenaSectionUpdateWithWhereUniqueWithoutArenaInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([ArenaSectionUpdateManyWithWhereWithoutArenaInputObjectSchema,
Yup.array().of(ArenaSectionUpdateManyWithWhereWithoutArenaInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([ArenaSectionScalarWhereInputObjectSchema,
Yup.array().of(ArenaSectionScalarWhereInputObjectSchema)])
});
