// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaUpdateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaCreateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema } from '../internals';

export const ArenaUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema = Yup.object({
    where: ArenaWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ArenaUpdateWithoutAmenitiesInputObjectSchema,
ArenaUncheckedUpdateWithoutAmenitiesInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutAmenitiesInputObjectSchema,
ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema])
});
