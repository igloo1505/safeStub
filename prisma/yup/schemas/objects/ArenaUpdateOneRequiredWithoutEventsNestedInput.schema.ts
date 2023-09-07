// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateWithoutEventsInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';;
import { ArenaCreateOrConnectWithoutEventsInputObjectSchema } from '../internals';;
import { ArenaUpsertWithoutEventsInputObjectSchema } from '../internals';;
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaUpdateWithoutEventsInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateWithoutEventsInputObjectSchema } from '../internals';

export const ArenaUpdateOneRequiredWithoutEventsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutEventsInputObjectSchema,
ArenaUncheckedCreateWithoutEventsInputObjectSchema]),  connectOrCreate: ArenaCreateOrConnectWithoutEventsInputObjectSchema,  upsert: ArenaUpsertWithoutEventsInputObjectSchema,  connect: ArenaWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ArenaUpdateWithoutEventsInputObjectSchema,
ArenaUncheckedUpdateWithoutEventsInputObjectSchema])
});
