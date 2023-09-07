// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const LocationWhereUniqueInputObjectSchema = Yup.object({
    id: Yup.number(),  uniqueKey: Yup.string(),  userId: Yup.number()
});
