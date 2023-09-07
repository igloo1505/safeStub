// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaAmenitiesCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesCreateOrConnectWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUpsertWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUncheckedUpdateWithoutArenaInputObjectSchema } from '../internals';

export const ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaAmenitiesCreateWithoutArenaInputObjectSchema,
ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema]),  connectOrCreate: ArenaAmenitiesCreateOrConnectWithoutArenaInputObjectSchema,  upsert: ArenaAmenitiesUpsertWithoutArenaInputObjectSchema,  connect: ArenaAmenitiesWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ArenaAmenitiesUpdateWithoutArenaInputObjectSchema,
ArenaAmenitiesUncheckedUpdateWithoutArenaInputObjectSchema])
});
