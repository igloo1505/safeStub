// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { LogoOrderByRelevanceInputObjectSchema } from '../internals';

export const LogoOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  path: SortOrderSchema,  width: SortOrderSchema,  height: SortOrderSchema,  rel: SortOrderSchema,  url: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  teamId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  Team: TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema,  _relevance: LogoOrderByRelevanceInputObjectSchema
});
