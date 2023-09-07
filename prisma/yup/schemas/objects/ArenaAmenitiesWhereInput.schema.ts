// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { EnumAMENITIYFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { EnumPARKINGFilterObjectSchema } from '../internals';;
import { ArenaListRelationFilterObjectSchema } from '../internals';;
import { EventListRelationFilterObjectSchema } from '../internals';

export const ArenaAmenitiesWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaAmenitiesWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaAmenitiesWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ArenaAmenitiesWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaAmenitiesWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaAmenitiesWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  indoor: Yup.mixed().oneOfSchemas([EnumAMENITIYFilterObjectSchema]),  covered: Yup.mixed().oneOfSchemas([EnumAMENITIYFilterObjectSchema]),  outdoor: Yup.mixed().oneOfSchemas([EnumAMENITIYFilterObjectSchema]),  food: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  alcohol: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  parking: Yup.mixed().oneOfSchemas([EnumPARKINGFilterObjectSchema]),  shuttleAvailable: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  Arena: ArenaListRelationFilterObjectSchema,  Event: EventListRelationFilterObjectSchema
});
