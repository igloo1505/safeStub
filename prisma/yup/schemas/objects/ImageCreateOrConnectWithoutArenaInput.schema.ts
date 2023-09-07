// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageWhereUniqueInputObjectSchema } from '../internals';;
import { ImageCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ImageUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';

export const ImageCreateOrConnectWithoutArenaInputObjectSchema = Yup.object({
    where: ImageWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ImageCreateWithoutArenaInputObjectSchema,
ImageUncheckedCreateWithoutArenaInputObjectSchema])
});
