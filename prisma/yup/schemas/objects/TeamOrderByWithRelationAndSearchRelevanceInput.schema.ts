// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { EventOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { LogoOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { TeamOrderByRelevanceInputObjectSchema } from '../internals';

export const TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  uniqueKey: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  name: SortOrderSchema,  abbreviation: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  displayName: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  displayName_short: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  nickname: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  league: SortOrderSchema,  sport: SortOrderSchema,  conference: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  division: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  homeArenaId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  eventId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  colorsId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  colors: ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema,  homeArena: ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema,  Event: EventOrderByWithRelationAndSearchRelevanceInputObjectSchema,  logos: LogoOrderByRelationAggregateInputObjectSchema,  _relevance: TeamOrderByRelevanceInputObjectSchema
});
