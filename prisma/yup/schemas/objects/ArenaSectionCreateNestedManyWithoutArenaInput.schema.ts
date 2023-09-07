// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionCreateManyArenaInputEnvelopeObjectSchema } from '../internals';;
import { ArenaSectionWhereUniqueInputObjectSchema } from '../internals';

export const ArenaSectionCreateNestedManyWithoutArenaInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaSectionCreateWithoutArenaInputObjectSchema,
Yup.array().of(ArenaSectionCreateWithoutArenaInputObjectSchema),
ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema,
Yup.array().of(ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema,
Yup.array().of(ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema)]),  createMany: ArenaSectionCreateManyArenaInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([ArenaSectionWhereUniqueInputObjectSchema,
Yup.array().of(ArenaSectionWhereUniqueInputObjectSchema)])
});
