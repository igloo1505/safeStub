// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaAmenitiesUpdateWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUncheckedUpdateWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesCreateWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema } from '../internals';

export const ArenaAmenitiesUpsertWithoutEventInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([ArenaAmenitiesUpdateWithoutEventInputObjectSchema,
ArenaAmenitiesUncheckedUpdateWithoutEventInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ArenaAmenitiesCreateWithoutEventInputObjectSchema,
ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema])
});
