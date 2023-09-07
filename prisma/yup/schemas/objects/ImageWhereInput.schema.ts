// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { ArenaListRelationFilterObjectSchema } from '../internals';

export const ImageWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ImageWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ImageWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ImageWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ImageWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ImageWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  publicUrl: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  Arena: ArenaListRelationFilterObjectSchema
});
