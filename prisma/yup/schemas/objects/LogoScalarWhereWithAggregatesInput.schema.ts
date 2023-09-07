// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntWithAggregatesFilterObjectSchema } from '../internals';;
import { StringWithAggregatesFilterObjectSchema } from '../internals';;
import { StringNullableListFilterObjectSchema } from '../internals';;
import { StringNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { IntNullableWithAggregatesFilterObjectSchema } from '../internals';

export const LogoScalarWhereWithAggregatesInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => LogoScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LogoScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => LogoScalarWhereWithAggregatesInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => LogoScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LogoScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntWithAggregatesFilterObjectSchema,
Yup.number()]),  path: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  width: Yup.mixed().oneOfSchemas([IntWithAggregatesFilterObjectSchema,
Yup.number()]),  height: Yup.mixed().oneOfSchemas([IntWithAggregatesFilterObjectSchema,
Yup.number()]),  rel: StringNullableListFilterObjectSchema,  url: Yup.mixed().oneOfSchemas([StringNullableWithAggregatesFilterObjectSchema,
Yup.string()]),  teamId: Yup.mixed().oneOfSchemas([IntNullableWithAggregatesFilterObjectSchema,
Yup.number()])
});
