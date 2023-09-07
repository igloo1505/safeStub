// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PaymentAccountDetailsWhereInputObjectSchema } from '../internals';

export const PaymentAccountDetailsRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([PaymentAccountDetailsWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([PaymentAccountDetailsWhereInputObjectSchema])
});
