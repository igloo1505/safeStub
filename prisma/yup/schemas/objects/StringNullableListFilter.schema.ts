// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const StringNullableListFilterObjectSchema = Yup.object({
    equals: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.string())]),  has: Yup.mixed().oneOfSchemas([Yup.string()]),  hasEvery: Yup.array().of(Yup.string()),  hasSome: Yup.array().of(Yup.string()),  isEmpty: Yup.boolean()
});
