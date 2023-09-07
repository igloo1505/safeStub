// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ArenaSectionCreateManyArenaInputObjectSchema = Yup.object({
    id: Yup.number(),  name: Yup.string().required()
});
