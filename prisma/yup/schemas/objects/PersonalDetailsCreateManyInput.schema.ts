// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const PersonalDetailsCreateManyInputObjectSchema = Yup.object({
    id: Yup.number(),  userId: Yup.number().required()
});
