// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaAmenitiesCreateWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesCreateOrConnectWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUpsertWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUpdateWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUncheckedUpdateWithoutEventInputObjectSchema } from '../internals';

export const ArenaAmenitiesUpdateOneRequiredWithoutEventNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaAmenitiesCreateWithoutEventInputObjectSchema,
ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema]),  connectOrCreate: ArenaAmenitiesCreateOrConnectWithoutEventInputObjectSchema,  upsert: ArenaAmenitiesUpsertWithoutEventInputObjectSchema,  connect: ArenaAmenitiesWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ArenaAmenitiesUpdateWithoutEventInputObjectSchema,
ArenaAmenitiesUncheckedUpdateWithoutEventInputObjectSchema])
});
