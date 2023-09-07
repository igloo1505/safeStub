// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const LegalNameAvgOrderByAggregateInputObjectSchema = Yup.object({
    detailsId: SortOrderSchema
});
