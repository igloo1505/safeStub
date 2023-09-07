import * as Yup from 'yup';

export const PaymentAccountDetailsScalarFieldEnumSchema = Yup.mixed().oneOf(["id","nameOnAccount"])