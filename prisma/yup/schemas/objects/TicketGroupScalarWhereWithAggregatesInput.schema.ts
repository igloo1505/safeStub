// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntWithAggregatesFilterObjectSchema } from '../internals';;
import { IntNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { BoolWithAggregatesFilterObjectSchema } from '../internals';

export const TicketGroupScalarWhereWithAggregatesInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TicketGroupScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TicketGroupScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TicketGroupScalarWhereWithAggregatesInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TicketGroupScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TicketGroupScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntWithAggregatesFilterObjectSchema,
Yup.number()]),  eventId: Yup.mixed().oneOfSchemas([IntNullableWithAggregatesFilterObjectSchema,
Yup.number()]),  seatedTogether: Yup.mixed().oneOfSchemas([BoolWithAggregatesFilterObjectSchema,
Yup.boolean()])
});
