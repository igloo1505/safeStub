// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';;
import { ArenaRelationFilterObjectSchema } from '../internals';;
import { ArenaWhereInputObjectSchema } from '../internals';;
import { TicketListRelationFilterObjectSchema } from '../internals';

export const ArenaSectionWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaSectionWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaSectionWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ArenaSectionWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaSectionWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaSectionWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  arenaId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  Arena: Yup.mixed().oneOfSchemas([ArenaRelationFilterObjectSchema,
ArenaWhereInputObjectSchema]),  Ticket: TicketListRelationFilterObjectSchema
});
