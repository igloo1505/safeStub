import * as Yup from 'yup';

export const UserScalarFieldEnumSchema = Yup.mixed().oneOf(["id","email","password","role","createdAt","paymentAccountDetailsId","verified"])