// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { EnumCATEGORYFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';;
import { ArenaRelationFilterObjectSchema } from '../internals';;
import { ArenaWhereInputObjectSchema } from '../internals';;
import { TicketListRelationFilterObjectSchema } from '../internals';;
import { TicketGroupListRelationFilterObjectSchema } from '../internals';;
import { ArenaAmenitiesRelationFilterObjectSchema } from '../internals';;
import { ArenaAmenitiesWhereInputObjectSchema } from '../internals';;
import { TagListRelationFilterObjectSchema } from '../internals';;
import { TeamListRelationFilterObjectSchema } from '../internals';

export const EventWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => EventWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => EventWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => EventWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => EventWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => EventWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  category: Yup.mixed().oneOfSchemas([EnumCATEGORYFilterObjectSchema]),  arenaId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  amenitiesId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  date: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  title: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  description: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  arena: Yup.mixed().oneOfSchemas([ArenaRelationFilterObjectSchema,
ArenaWhereInputObjectSchema]),  tickets: TicketListRelationFilterObjectSchema,  ticketGroups: TicketGroupListRelationFilterObjectSchema,  amenities: Yup.mixed().oneOfSchemas([ArenaAmenitiesRelationFilterObjectSchema,
ArenaAmenitiesWhereInputObjectSchema]),  tags: TagListRelationFilterObjectSchema,  participants: TeamListRelationFilterObjectSchema
});
