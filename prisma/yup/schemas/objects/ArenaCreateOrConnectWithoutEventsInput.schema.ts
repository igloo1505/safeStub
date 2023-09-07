// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaCreateWithoutEventsInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';

export const ArenaCreateOrConnectWithoutEventsInputObjectSchema = Yup.object({
    where: ArenaWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutEventsInputObjectSchema,
ArenaUncheckedCreateWithoutEventsInputObjectSchema])
});
