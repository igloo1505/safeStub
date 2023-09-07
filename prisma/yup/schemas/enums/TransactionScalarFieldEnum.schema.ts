import * as Yup from 'yup';

export const TransactionScalarFieldEnumSchema = Yup.mixed().oneOf(["id","price","paymentId","sellerId","buyerId","date"])