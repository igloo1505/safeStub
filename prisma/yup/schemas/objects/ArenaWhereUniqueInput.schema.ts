// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ArenaWhereUniqueInputObjectSchema = Yup.object({
    id: Yup.number(),  uniqueKey: Yup.string(),  name: Yup.string()
});
