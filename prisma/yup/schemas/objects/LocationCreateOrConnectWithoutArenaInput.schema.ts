// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationWhereUniqueInputObjectSchema } from '../internals';;
import { LocationCreateWithoutArenaInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';

export const LocationCreateOrConnectWithoutArenaInputObjectSchema = Yup.object({
    where: LocationWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([LocationCreateWithoutArenaInputObjectSchema,
LocationUncheckedCreateWithoutArenaInputObjectSchema])
});
