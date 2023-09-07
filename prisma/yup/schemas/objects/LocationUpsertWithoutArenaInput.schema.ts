// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { LocationUncheckedUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { LocationCreateWithoutArenaInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';

export const LocationUpsertWithoutArenaInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([LocationUpdateWithoutArenaInputObjectSchema,
LocationUncheckedUpdateWithoutArenaInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([LocationCreateWithoutArenaInputObjectSchema,
LocationUncheckedCreateWithoutArenaInputObjectSchema])
});
