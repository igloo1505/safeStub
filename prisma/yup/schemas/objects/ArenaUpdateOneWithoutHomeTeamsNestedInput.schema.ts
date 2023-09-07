// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { ArenaCreateOrConnectWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { ArenaUpsertWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaUpdateWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateWithoutHomeTeamsInputObjectSchema } from '../internals';

export const ArenaUpdateOneWithoutHomeTeamsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutHomeTeamsInputObjectSchema,
ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema]),  connectOrCreate: ArenaCreateOrConnectWithoutHomeTeamsInputObjectSchema,  upsert: ArenaUpsertWithoutHomeTeamsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: ArenaWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ArenaUpdateWithoutHomeTeamsInputObjectSchema,
ArenaUncheckedUpdateWithoutHomeTeamsInputObjectSchema])
});
