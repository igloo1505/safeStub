// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { ImageUncheckedUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { ImageCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ImageUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';

export const ImageUpsertWithoutArenaInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([ImageUpdateWithoutArenaInputObjectSchema,
ImageUncheckedUpdateWithoutArenaInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ImageCreateWithoutArenaInputObjectSchema,
ImageUncheckedCreateWithoutArenaInputObjectSchema])
});
