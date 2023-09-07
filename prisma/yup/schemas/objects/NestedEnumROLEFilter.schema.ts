// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const NestedEnumROLEFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumROLEFilterObjectSchema.default(undefined))])
});
