// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaUpdateWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateWithoutLocationInputObjectSchema } from '../internals';

export const ArenaUpdateWithWhereUniqueWithoutLocationInputObjectSchema = Yup.object({
    where: ArenaWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ArenaUpdateWithoutLocationInputObjectSchema,
ArenaUncheckedUpdateWithoutLocationInputObjectSchema])
});
