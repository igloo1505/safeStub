// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { IntNullableFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { EventRelationFilterObjectSchema } from '../internals';;
import { EventWhereInputObjectSchema } from '../internals';;
import { TicketListRelationFilterObjectSchema } from '../internals';

export const TicketGroupWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TicketGroupWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TicketGroupWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TicketGroupWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TicketGroupWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TicketGroupWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  eventId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  seatedTogether: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  Event: Yup.mixed().oneOfSchemas([EventRelationFilterObjectSchema,
EventWhereInputObjectSchema]),  tickets: TicketListRelationFilterObjectSchema
});
