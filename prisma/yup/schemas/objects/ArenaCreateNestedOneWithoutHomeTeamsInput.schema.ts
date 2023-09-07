// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { ArenaCreateOrConnectWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { ArenaWhereUniqueInputObjectSchema } from '../internals';

export const ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutHomeTeamsInputObjectSchema,
ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema]),  connectOrCreate: ArenaCreateOrConnectWithoutHomeTeamsInputObjectSchema,  connect: ArenaWhereUniqueInputObjectSchema
});
