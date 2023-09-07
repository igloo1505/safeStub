// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateWithoutArenaInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';;
import { LocationCreateOrConnectWithoutArenaInputObjectSchema } from '../internals';;
import { LocationUpsertWithoutArenaInputObjectSchema } from '../internals';;
import { LocationWhereUniqueInputObjectSchema } from '../internals';;
import { LocationUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { LocationUncheckedUpdateWithoutArenaInputObjectSchema } from '../internals';

export const LocationUpdateOneRequiredWithoutArenaNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LocationCreateWithoutArenaInputObjectSchema,
LocationUncheckedCreateWithoutArenaInputObjectSchema]),  connectOrCreate: LocationCreateOrConnectWithoutArenaInputObjectSchema,  upsert: LocationUpsertWithoutArenaInputObjectSchema,  connect: LocationWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([LocationUpdateWithoutArenaInputObjectSchema,
LocationUncheckedUpdateWithoutArenaInputObjectSchema])
});
