// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';;
import { IntNullableFilterObjectSchema } from '../internals';;
import { EventListRelationFilterObjectSchema } from '../internals';;
import { LocationRelationFilterObjectSchema } from '../internals';;
import { LocationWhereInputObjectSchema } from '../internals';;
import { ArenaSectionListRelationFilterObjectSchema } from '../internals';;
import { ArenaAmenitiesRelationFilterObjectSchema } from '../internals';;
import { ArenaAmenitiesWhereInputObjectSchema } from '../internals';;
import { ImageRelationFilterObjectSchema } from '../internals';;
import { ImageWhereInputObjectSchema } from '../internals';;
import { TeamListRelationFilterObjectSchema } from '../internals';

export const ArenaWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ArenaWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  uniqueKey: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  arenaAmenitiesId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  locationId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  sectionImageId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  events: EventListRelationFilterObjectSchema,  location: Yup.mixed().oneOfSchemas([LocationRelationFilterObjectSchema,
LocationWhereInputObjectSchema]),  sections: ArenaSectionListRelationFilterObjectSchema,  amenities: Yup.mixed().oneOfSchemas([ArenaAmenitiesRelationFilterObjectSchema,
ArenaAmenitiesWhereInputObjectSchema]),  sectionImage: Yup.mixed().oneOfSchemas([ImageRelationFilterObjectSchema,
ImageWhereInputObjectSchema]),  homeTeams: TeamListRelationFilterObjectSchema
});
