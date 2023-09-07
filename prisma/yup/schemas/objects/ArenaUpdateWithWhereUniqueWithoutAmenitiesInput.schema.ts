// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaUpdateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateWithoutAmenitiesInputObjectSchema } from '../internals';

export const ArenaUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema = Yup.object({
    where: ArenaWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ArenaUpdateWithoutAmenitiesInputObjectSchema,
ArenaUncheckedUpdateWithoutAmenitiesInputObjectSchema])
});
