// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { NullsOrderSchema } from '../internals';

export const SortOrderInputObjectSchema = Yup.object({
    sort: SortOrderSchema,  nulls: NullsOrderSchema
});
