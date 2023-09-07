// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaCreateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema } from '../internals';

export const ArenaCreateOrConnectWithoutAmenitiesInputObjectSchema = Yup.object({
    where: ArenaWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutAmenitiesInputObjectSchema,
ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema])
});
