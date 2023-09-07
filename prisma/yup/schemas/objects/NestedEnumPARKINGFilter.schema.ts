// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const NestedEnumPARKINGFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumPARKINGFilterObjectSchema.default(undefined))])
});
