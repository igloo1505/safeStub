// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntWithAggregatesFilterObjectSchema } from '../internals';;
import { EnumCATEGORYWithAggregatesFilterObjectSchema } from '../internals';;
import { DateTimeWithAggregatesFilterObjectSchema } from '../internals';;
import { StringWithAggregatesFilterObjectSchema } from '../internals';

export const EventScalarWhereWithAggregatesInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntWithAggregatesFilterObjectSchema,
Yup.number()]),  category: Yup.mixed().oneOfSchemas([EnumCATEGORYWithAggregatesFilterObjectSchema]),  arenaId: Yup.mixed().oneOfSchemas([IntWithAggregatesFilterObjectSchema,
Yup.number()]),  amenitiesId: Yup.mixed().oneOfSchemas([IntWithAggregatesFilterObjectSchema,
Yup.number()]),  date: Yup.mixed().oneOfSchemas([DateTimeWithAggregatesFilterObjectSchema]),  title: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  description: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()])
});
