// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaAmenitiesCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';

export const ArenaAmenitiesCreateOrConnectWithoutArenaInputObjectSchema = Yup.object({
    where: ArenaAmenitiesWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ArenaAmenitiesCreateWithoutArenaInputObjectSchema,
ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema])
});
