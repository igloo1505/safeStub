// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const LocationCreateManyInputObjectSchema = Yup.object({
    id: Yup.number(),  uniqueKey: Yup.mixed().oneOfSchemas([Yup.string()]),  street: Yup.mixed().oneOfSchemas([Yup.string()]),  zip: Yup.mixed().oneOfSchemas([Yup.number()]),  city: Yup.string().required(),  cityId: Yup.mixed().oneOfSchemas([Yup.number()]),  lat: Yup.mixed().oneOfSchemas([Yup.number()]),  long: Yup.mixed().oneOfSchemas([Yup.number()]),  userId: Yup.mixed().oneOfSchemas([Yup.number()])
});
