// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateWithoutEventsInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';;
import { ArenaCreateOrConnectWithoutEventsInputObjectSchema } from '../internals';;
import { ArenaWhereUniqueInputObjectSchema } from '../internals';

export const ArenaCreateNestedOneWithoutEventsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutEventsInputObjectSchema,
ArenaUncheckedCreateWithoutEventsInputObjectSchema]),  connectOrCreate: ArenaCreateOrConnectWithoutEventsInputObjectSchema,  connect: ArenaWhereUniqueInputObjectSchema
});
