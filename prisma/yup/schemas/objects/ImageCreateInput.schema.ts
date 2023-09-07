// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateNestedManyWithoutSectionImageInputObjectSchema } from '../internals';

export const ImageCreateInputObjectSchema = Yup.object({
    publicUrl: Yup.mixed().oneOfSchemas([Yup.string()]),  createdAt: Yup.date(),  updatedAt: Yup.date(),  Arena: ArenaCreateNestedManyWithoutSectionImageInputObjectSchema
});
