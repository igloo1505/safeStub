// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationUpdateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationUncheckedUpdateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const LocationUpsertWithoutPersonalDetailsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([LocationUpdateWithoutPersonalDetailsInputObjectSchema,
LocationUncheckedUpdateWithoutPersonalDetailsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([LocationCreateWithoutPersonalDetailsInputObjectSchema,
LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema])
});
