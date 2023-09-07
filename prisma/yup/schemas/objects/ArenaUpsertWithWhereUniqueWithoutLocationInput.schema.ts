// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaUpdateWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaCreateWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';

export const ArenaUpsertWithWhereUniqueWithoutLocationInputObjectSchema = Yup.object({
    where: ArenaWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ArenaUpdateWithoutLocationInputObjectSchema,
ArenaUncheckedUpdateWithoutLocationInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutLocationInputObjectSchema,
ArenaUncheckedCreateWithoutLocationInputObjectSchema])
});
