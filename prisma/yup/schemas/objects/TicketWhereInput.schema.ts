// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { IntNullableFilterObjectSchema } from '../internals';;
import { EventRelationFilterObjectSchema } from '../internals';;
import { EventWhereInputObjectSchema } from '../internals';;
import { TicketGroupRelationFilterObjectSchema } from '../internals';;
import { TicketGroupWhereInputObjectSchema } from '../internals';;
import { ArenaSectionRelationFilterObjectSchema } from '../internals';;
import { ArenaSectionWhereInputObjectSchema } from '../internals';

export const TicketWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TicketWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TicketWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TicketWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TicketWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TicketWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  eventId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  ticketGroupId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  arenaSectionId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  Event: Yup.mixed().oneOfSchemas([EventRelationFilterObjectSchema,
EventWhereInputObjectSchema]),  TicketGroup: Yup.mixed().oneOfSchemas([TicketGroupRelationFilterObjectSchema,
TicketGroupWhereInputObjectSchema]),  arenaSection: Yup.mixed().oneOfSchemas([ArenaSectionRelationFilterObjectSchema,
ArenaSectionWhereInputObjectSchema])
});
