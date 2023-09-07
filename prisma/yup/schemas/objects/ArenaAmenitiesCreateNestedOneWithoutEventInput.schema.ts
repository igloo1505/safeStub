// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaAmenitiesCreateWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesCreateOrConnectWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from '../internals';

export const ArenaAmenitiesCreateNestedOneWithoutEventInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaAmenitiesCreateWithoutEventInputObjectSchema,
ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema]),  connectOrCreate: ArenaAmenitiesCreateOrConnectWithoutEventInputObjectSchema,  connect: ArenaAmenitiesWhereUniqueInputObjectSchema
});
