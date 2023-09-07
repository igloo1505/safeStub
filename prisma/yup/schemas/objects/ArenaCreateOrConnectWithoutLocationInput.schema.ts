// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaCreateWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';

export const ArenaCreateOrConnectWithoutLocationInputObjectSchema = Yup.object({
    where: ArenaWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutLocationInputObjectSchema,
ArenaUncheckedCreateWithoutLocationInputObjectSchema])
});
