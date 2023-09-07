// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ArenaCreateManyAmenitiesInputObjectSchema = Yup.object({
    id: Yup.number(),  uniqueKey: Yup.mixed().oneOfSchemas([Yup.string()]),  name: Yup.string().required(),  locationId: Yup.number().required(),  sectionImageId: Yup.mixed().oneOfSchemas([Yup.number()])
});
