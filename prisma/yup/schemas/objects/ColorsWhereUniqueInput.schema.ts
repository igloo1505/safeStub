// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ColorsWhereUniqueInputObjectSchema = Yup.object({
    id: Yup.number()
});
