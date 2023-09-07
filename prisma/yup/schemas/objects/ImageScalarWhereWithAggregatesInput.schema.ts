// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntWithAggregatesFilterObjectSchema } from '../internals';;
import { StringNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { DateTimeWithAggregatesFilterObjectSchema } from '../internals';

export const ImageScalarWhereWithAggregatesInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntWithAggregatesFilterObjectSchema,
Yup.number()]),  publicUrl: Yup.mixed().oneOfSchemas([StringNullableWithAggregatesFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeWithAggregatesFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeWithAggregatesFilterObjectSchema])
});
