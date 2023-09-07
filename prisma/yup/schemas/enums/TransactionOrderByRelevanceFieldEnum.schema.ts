import * as Yup from 'yup';

export const TransactionOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["paymentId"])