// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaAmenitiesWhereInputObjectSchema } from '../internals';

export const ArenaAmenitiesRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([ArenaAmenitiesWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([ArenaAmenitiesWhereInputObjectSchema])
});
