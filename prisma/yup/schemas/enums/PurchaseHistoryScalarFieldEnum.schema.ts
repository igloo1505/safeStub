import * as Yup from 'yup';

export const PurchaseHistoryScalarFieldEnumSchema = Yup.mixed().oneOf(["id","userId"])