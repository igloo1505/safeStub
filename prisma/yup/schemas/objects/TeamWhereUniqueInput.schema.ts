// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TeamWhereUniqueInputObjectSchema = Yup.object({
    id: Yup.number(),  uniqueKey: Yup.string()
});
