// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const LogoAvgOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  width: SortOrderSchema,  height: SortOrderSchema,  teamId: SortOrderSchema
});
