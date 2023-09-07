// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntWithAggregatesFilterObjectSchema } from '../internals';;
import { EnumAMENITIYWithAggregatesFilterObjectSchema } from '../internals';;
import { BoolWithAggregatesFilterObjectSchema } from '../internals';;
import { EnumPARKINGWithAggregatesFilterObjectSchema } from '../internals';

export const ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntWithAggregatesFilterObjectSchema,
Yup.number()]),  indoor: Yup.mixed().oneOfSchemas([EnumAMENITIYWithAggregatesFilterObjectSchema]),  covered: Yup.mixed().oneOfSchemas([EnumAMENITIYWithAggregatesFilterObjectSchema]),  outdoor: Yup.mixed().oneOfSchemas([EnumAMENITIYWithAggregatesFilterObjectSchema]),  food: Yup.mixed().oneOfSchemas([BoolWithAggregatesFilterObjectSchema,
Yup.boolean()]),  alcohol: Yup.mixed().oneOfSchemas([BoolWithAggregatesFilterObjectSchema,
Yup.boolean()]),  parking: Yup.mixed().oneOfSchemas([EnumPARKINGWithAggregatesFilterObjectSchema]),  shuttleAvailable: Yup.mixed().oneOfSchemas([BoolWithAggregatesFilterObjectSchema,
Yup.boolean()])
});
