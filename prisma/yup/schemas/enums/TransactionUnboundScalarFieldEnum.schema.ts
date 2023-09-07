import * as Yup from 'yup';

export const TransactionUnboundScalarFieldEnumSchema = Yup.mixed().oneOf(["id","price","paymentId","sellerId","buyerId","date"])