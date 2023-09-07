// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { IntNullableFilterObjectSchema } from '../internals';

export const TicketScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TicketScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TicketScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TicketScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TicketScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TicketScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  eventId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  ticketGroupId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  arenaSectionId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()])
});
