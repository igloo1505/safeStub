import * as Yup from 'yup';

export const TransactionUnboundOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["paymentId"])