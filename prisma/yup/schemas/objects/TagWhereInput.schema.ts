// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';;
import { EventListRelationFilterObjectSchema } from '../internals';

export const TagWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TagWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TagWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TagWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TagWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TagWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  value: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  Event: EventListRelationFilterObjectSchema
});
