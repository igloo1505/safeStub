// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntWithAggregatesFilterObjectSchema } from '../internals';;
import { StringNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { StringWithAggregatesFilterObjectSchema } from '../internals';;
import { IntNullableWithAggregatesFilterObjectSchema } from '../internals';

export const ArenaScalarWhereWithAggregatesInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ArenaScalarWhereWithAggregatesInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntWithAggregatesFilterObjectSchema,
Yup.number()]),  uniqueKey: Yup.mixed().oneOfSchemas([StringNullableWithAggregatesFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  arenaAmenitiesId: Yup.mixed().oneOfSchemas([IntWithAggregatesFilterObjectSchema,
Yup.number()]),  locationId: Yup.mixed().oneOfSchemas([IntWithAggregatesFilterObjectSchema,
Yup.number()]),  sectionImageId: Yup.mixed().oneOfSchemas([IntNullableWithAggregatesFilterObjectSchema,
Yup.number()])
});
