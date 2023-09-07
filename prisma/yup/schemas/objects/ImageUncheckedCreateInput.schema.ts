// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaUncheckedCreateNestedManyWithoutSectionImageInputObjectSchema } from '../internals';

export const ImageUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.number(),  publicUrl: Yup.mixed().oneOfSchemas([Yup.string()]),  createdAt: Yup.date(),  updatedAt: Yup.date(),  Arena: ArenaUncheckedCreateNestedManyWithoutSectionImageInputObjectSchema
});
