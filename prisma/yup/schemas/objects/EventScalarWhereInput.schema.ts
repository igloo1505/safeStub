// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { EnumCATEGORYFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';

export const EventScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => EventScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => EventScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => EventScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => EventScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => EventScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  category: Yup.mixed().oneOfSchemas([EnumCATEGORYFilterObjectSchema]),  arenaId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  amenitiesId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  date: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  title: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  description: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
