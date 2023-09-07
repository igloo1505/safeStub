// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationCreateOrConnectWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationUpsertWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationWhereUniqueInputObjectSchema } from '../internals';;
import { LocationUpdateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationUncheckedUpdateWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const LocationUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LocationCreateWithoutPersonalDetailsInputObjectSchema,
LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema]),  connectOrCreate: LocationCreateOrConnectWithoutPersonalDetailsInputObjectSchema,  upsert: LocationUpsertWithoutPersonalDetailsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: LocationWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([LocationUpdateWithoutPersonalDetailsInputObjectSchema,
LocationUncheckedUpdateWithoutPersonalDetailsInputObjectSchema])
});
