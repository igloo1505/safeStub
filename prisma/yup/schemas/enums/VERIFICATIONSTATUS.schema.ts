import * as Yup from 'yup';

export const VERIFICATIONSTATUSSchema = Yup.mixed().oneOf(["Verified","Pending","Unverified"])