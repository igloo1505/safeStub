// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaUpdateWithoutEventsInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateWithoutEventsInputObjectSchema } from '../internals';;
import { ArenaCreateWithoutEventsInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';

export const ArenaUpsertWithoutEventsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([ArenaUpdateWithoutEventsInputObjectSchema,
ArenaUncheckedUpdateWithoutEventsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutEventsInputObjectSchema,
ArenaUncheckedCreateWithoutEventsInputObjectSchema])
});
