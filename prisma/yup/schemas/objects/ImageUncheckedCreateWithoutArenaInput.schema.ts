// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ImageUncheckedCreateWithoutArenaInputObjectSchema = Yup.object({
    id: Yup.number(),  publicUrl: Yup.mixed().oneOfSchemas([Yup.string()]),  createdAt: Yup.date(),  updatedAt: Yup.date()
});
