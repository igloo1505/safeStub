// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaAmenitiesUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUncheckedUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';

export const ArenaAmenitiesUpsertWithoutArenaInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([ArenaAmenitiesUpdateWithoutArenaInputObjectSchema,
ArenaAmenitiesUncheckedUpdateWithoutArenaInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ArenaAmenitiesCreateWithoutArenaInputObjectSchema,
ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema])
});
