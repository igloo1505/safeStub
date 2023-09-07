// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ImageUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ImageCreateOrConnectWithoutArenaInputObjectSchema } from '../internals';;
import { ImageWhereUniqueInputObjectSchema } from '../internals';

export const ImageCreateNestedOneWithoutArenaInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ImageCreateWithoutArenaInputObjectSchema,
ImageUncheckedCreateWithoutArenaInputObjectSchema]),  connectOrCreate: ImageCreateOrConnectWithoutArenaInputObjectSchema,  connect: ImageWhereUniqueInputObjectSchema
});
