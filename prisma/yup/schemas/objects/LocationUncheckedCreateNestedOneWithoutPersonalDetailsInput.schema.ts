// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationCreateOrConnectWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LocationWhereUniqueInputObjectSchema } from '../internals';

export const LocationUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LocationCreateWithoutPersonalDetailsInputObjectSchema,
LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema]),  connectOrCreate: LocationCreateOrConnectWithoutPersonalDetailsInputObjectSchema,  connect: LocationWhereUniqueInputObjectSchema
});
