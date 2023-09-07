// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageOrderByRelevanceFieldEnumSchema } from '../internals';;
import { SortOrderSchema } from '../internals';

export const ImageOrderByRelevanceInputObjectSchema = Yup.object({
    fields: Yup.mixed().oneOfSchemas([ImageOrderByRelevanceFieldEnumSchema,
ImageOrderByRelevanceFieldEnumSchema]),  sort: SortOrderSchema,  search: Yup.string().required()
});
