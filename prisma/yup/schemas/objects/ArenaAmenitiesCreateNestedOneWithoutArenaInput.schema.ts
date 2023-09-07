// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaAmenitiesCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesCreateOrConnectWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from '../internals';

export const ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaAmenitiesCreateWithoutArenaInputObjectSchema,
ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema]),  connectOrCreate: ArenaAmenitiesCreateOrConnectWithoutArenaInputObjectSchema,  connect: ArenaAmenitiesWhereUniqueInputObjectSchema
});
