// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaAmenitiesCreateWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema } from '../internals';

export const ArenaAmenitiesCreateOrConnectWithoutEventInputObjectSchema = Yup.object({
    where: ArenaAmenitiesWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ArenaAmenitiesCreateWithoutEventInputObjectSchema,
ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema])
});
