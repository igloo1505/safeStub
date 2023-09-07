// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';;
import { EnumFaqCategoryFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const FaqWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => FaqWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => FaqWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => FaqWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => FaqWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => FaqWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  title: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  subtitle: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  body: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  category: Yup.mixed().oneOfSchemas([EnumFaqCategoryFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  priority: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()])
});
