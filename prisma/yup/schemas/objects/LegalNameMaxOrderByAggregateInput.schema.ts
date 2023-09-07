// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const LegalNameMaxOrderByAggregateInputObjectSchema = Yup.object({
    first: SortOrderSchema,  middle: SortOrderSchema,  last: SortOrderSchema,  detailsId: SortOrderSchema
});
