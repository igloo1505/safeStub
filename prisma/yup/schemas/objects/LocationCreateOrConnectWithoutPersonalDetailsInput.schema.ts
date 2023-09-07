// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationWhereUniqueInputObjectSchema } from '../internals';;
import { LocationCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const LocationCreateOrConnectWithoutPersonalDetailsInputObjectSchema = Yup.object({
    where: LocationWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([LocationCreateWithoutPersonalDetailsInputObjectSchema,
LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema])
});
