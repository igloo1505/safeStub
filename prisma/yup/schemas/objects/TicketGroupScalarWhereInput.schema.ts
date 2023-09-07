// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { IntNullableFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';

export const TicketGroupScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TicketGroupScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TicketGroupScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TicketGroupScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TicketGroupScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TicketGroupScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  eventId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  seatedTogether: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()])
});
