// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateWithoutArenaInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';;
import { LocationCreateOrConnectWithoutArenaInputObjectSchema } from '../internals';;
import { LocationWhereUniqueInputObjectSchema } from '../internals';

export const LocationCreateNestedOneWithoutArenaInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LocationCreateWithoutArenaInputObjectSchema,
LocationUncheckedCreateWithoutArenaInputObjectSchema]),  connectOrCreate: LocationCreateOrConnectWithoutArenaInputObjectSchema,  connect: LocationWhereUniqueInputObjectSchema
});
